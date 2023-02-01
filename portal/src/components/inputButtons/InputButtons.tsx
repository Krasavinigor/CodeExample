import React, {
  useEffect, useRef, useState,
} from "react";
import {
  Box, Button, IconButton, withStyles,
} from "@material-ui/core";
import { EmojiData } from "emoji-mart";
import profile from "../../assets/profile.svg";
import emoji from "../../assets/emoji.svg";
import "./inputButtons.css";
import constants from "../../resources/constants";
import EmojiPicker from "./EmojiPicker";

const InputButton = withStyles(() => ({
  root: {
    textTransform: "none",
    color: "var(--gray)",
  },
}))(Button);

interface IInputButtons {
  addCandidateName: () => void;
  addEmoji: (item: EmojiData) => void;
}

export default function InputButtons({ addCandidateName, addEmoji }: IInputButtons): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const setEmojiState = (item: EmojiData) => {
    addEmoji(item);
    setIsOpen(false);
  };

  const useOutsideAlert = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent): void {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlert(wrapperRef);

  return (
    <Box className="box-with-buttons box-row ">
      <IconButton onClick={() => setIsOpen((prev) => !prev)} disabled={isOpen}>
        <img src={emoji} alt="emoji" />
      </IconButton>

      {isOpen ? <EmojiPicker wrapperRef={wrapperRef} addEmoji={setEmojiState} /> : null}

      <InputButton startIcon={(<img src={profile} alt="candidate_name" />)} onClick={() => addCandidateName()}>
        {constants.buttons.candidateName}
      </InputButton>

      {/* <InputButton startIcon={(<img src={signature} alt="signature" />)}>
        {constants.buttons.signature}
      </InputButton> */}

    </Box>
  );
}
