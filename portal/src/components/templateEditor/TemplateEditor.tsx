import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { Box, TextField } from "@material-ui/core";
import "./templateEditor.css";
import Alert from "@material-ui/lab/Alert";
import {
  BaseEmoji, EmojiData, getEmojiDataFromNative,
} from "emoji-mart";
import data from "emoji-mart/data/all.json";
import Buttons from "../buttons/Buttons";
import constants from "../../resources/constants";
import { ITemplate } from "../../helpers/templateApi";
import InputButtons from "../inputButtons/InputButtons";
import { log, splice } from "../../utils/utils";
import { ReactComponent as RemoveTemplate } from "../../assets/remove-template.svg";
import { ReactComponent as Bin } from "../../assets/bin.svg";
import CancelButton from "./CancelButton";
import RemoveButton from "./RemoveButton";
import AnalyticsHelper from "../../helpers/analyticsHelper";

const initEmojiData = getEmojiDataFromNative("🙂", "google", data);

interface ITemplateEditorProps {
  template: ITemplate;
  isEdit: boolean;
  updateTemplate: (template: ITemplate) => void;
  deleteTemplate: (templateId: string) => void;
  setIsEdit: (arg: boolean) => void;
}

export default function TemplateEditor(props: ITemplateEditorProps): JSX.Element {
  const {
    template, updateTemplate, deleteTemplate, isEdit, setIsEdit,
  } = props;

  const [content, setContent] = useState(template.content);
  const [title, setTitle] = useState(template.title);

  const [isShowingAlert, setIsShowingAlert] = useState(false);

  const [selectionRange, setSelectionRange] = useState({ start: 0, end: 0 });
  const [textArea, setTextArea] = useState<HTMLTextAreaElement>();
  const [emojiData, setEmojiData] = useState<EmojiData>(initEmojiData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const callbacksList = useRef<(() => void)[]>([]);

  const setContentWithCallback = (item: string, callback: () => void) => {
    setContent((prev: string) => {
      const newContent = splice(prev, item, selectionRange.start, selectionRange.end);

      return newContent;
    });

    if (callback) {
      callbacksList.current.push(callback);
    }
  };

  const {
    emptyTitleMessage, templateText, removeTemplateMessage, events,
  } = constants;

  const saveButtonClick = () => {
    if (title.length) {
      setIsShowingAlert(false);
      updateTemplate({ ...template, content, title });
    } else {
      setIsShowingAlert(true);
    }
    AnalyticsHelper.trackEvent(events.saveClicked);
  };

  const removeTemplate = () => {
    deleteTemplate(template.id);
    setModalIsOpen(false);
    AnalyticsHelper.trackEvent(events.removeClicked);
  };

  const openModal = () => {
    setModalIsOpen(true);
    AnalyticsHelper.trackEvent(events.deleteClicked);
  };

  const addCandidateName = () => {
    const cursorPositionWithName = selectionRange.start + constants.candidateName.length;
    setContentWithCallback(constants.candidateName, () => {
      textArea?.focus();
      textArea?.setSelectionRange(cursorPositionWithName, cursorPositionWithName);
      setSelectionRange({ start: cursorPositionWithName, end: cursorPositionWithName });
    });
    AnalyticsHelper.trackEvent(events.addCandidateName);
  };

  const addEmoji = (item: EmojiData) => {
    setEmojiData(item);
    AnalyticsHelper.trackEvent(events.addEmoji);
  };

  useEffect(() => {
    if (emojiData !== initEmojiData) {
      const nativeEmoji: string = (emojiData as BaseEmoji).native;
      const cursorPositionWithEmoji = selectionRange.start + nativeEmoji.length;

      setContentWithCallback(nativeEmoji, () => {
        textArea?.focus();
        textArea?.setSelectionRange(cursorPositionWithEmoji,
          cursorPositionWithEmoji);
        setSelectionRange({ start: cursorPositionWithEmoji, end: cursorPositionWithEmoji });
      });
    }
  }, [emojiData]);

  useEffect(() => {
    if (template.content !== content || template.title !== title) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }

    try {
      callbacksList.current.forEach((callback: () => void) => callback());
    } catch (err) {
      log(constants.errorMessage);
      log(err);
    } finally {
      callbacksList.current = [];
    }
  }, [content, title]);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      opacity: 1,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Box className="template">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick
        style={customStyles}
      >
        <div className="template-modal">
          <RemoveTemplate />
          <p>{removeTemplateMessage}</p>
          <Box className="buttons-box">
            <CancelButton
              variant="contained"
              color="primary"
              onClick={() => {
                setModalIsOpen(false);
                AnalyticsHelper.trackEvent(events.cancelClicked);
              }}
            >
              {constants.buttons.cancel}
            </CancelButton>
            <RemoveButton
              variant="outlined"
              color="secondary"
              startIcon={<Bin fill="var(--primary-color)" />}
              onClick={() => removeTemplate()}
            >
              {constants.buttons.remove}
            </RemoveButton>
          </Box>
        </div>
      </ReactModal>

      <TextField
        id="title"
        label={constants.title}
        className="title-input"
        inputProps={{ style: { fontSize: ".9rem" } }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
      />

      <TextField
        id="template-input"
        className="template-input"
        label={templateText}
        multiline
        rows={9}
        inputProps={{ style: { fontSize: ".9rem" } }}
        value={content}
        variant="outlined"
        onChange={(e) => setContent(e.target.value)}
        onFocus={(e) => setTextArea(e.target as HTMLTextAreaElement)}
        onSelect={(e) => {
          const start = (e.target as HTMLTextAreaElement).selectionStart || 0;
          const end = (e.target as HTMLTextAreaElement).selectionEnd || 0;

          setSelectionRange({ start, end });
        }}
      />

      <InputButtons addCandidateName={addCandidateName} addEmoji={addEmoji} />

      <Buttons
        saveButtonClick={saveButtonClick}
        deleteButtonClick={openModal}
        disabled={!isEdit}
      />

      <Box display={isShowingAlert ? "contents" : "none"}>
        <Alert onClose={() => setIsShowingAlert(false)} severity="error">{emptyTitleMessage}</Alert>
      </Box>
    </Box>
  );
}
