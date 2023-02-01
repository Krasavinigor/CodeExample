import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Default as Spinner } from "react-spinners-css";
import Content from "../content/Content";
import Sidebar from "../sidebar/Sidebar";
import NoTemplates from "../noTemplates/NoTemplates";
import TemplateEditor from "../templateEditor/TemplateEditor";
import SidebarTemplateItem from "../sidebarTemplateItem/SidebarTemplateItem";
import AddButton from "./AddButton";
import "./templates.css";
import plus from "../../assets/plus.svg";
import constants from "../../resources/constants";
import {
  getTemplates, deleteTemplate, updateTemplate, ITemplate, IUpdatedData,
} from "../../helpers/templateApi";
import { IAlertsProps } from "../tabsWithLayouts/TabsWithLayouts";
import AnalyticsHelper from "../../helpers/analyticsHelper";

export default function Templates({ showAlert }: IAlertsProps): JSX.Element {
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [updated, setUpdated] = useState<ITemplate>();

  const initialSelectedId = () => (templates.length ? templates[0].id : "");
  const [deletedId, setDeletedId] = useState<string>();
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId());
  const [updatedId, setUpdatedId] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isEdit, setIsEdit] = useState(false);

  const {
    newTemplateId, email, alert, events,
  } = constants;

  const ownerId: string = localStorage.getItem(email) || "";
  const open = true;

  useEffect(() => {
    async function update() {
      if (updated) {
        let updatedData: IUpdatedData = { templates, updatedId: updated.id };
        try {
          updatedData = await updateTemplate(templates, updated);
          showAlert({ severity: "success", msg: alert.save.success, open });
          setIsEdit(false);
        } catch (err) {
          showAlert({ severity: "error", msg: alert.save.fail, open });
          setIsEdit(true);
        }
        setTemplates(updatedData.templates);

        setUpdatedId(updatedData.updatedId === ""
          ? initialSelectedId()
          : updatedData.updatedId);
        setUpdated(undefined);
      }
    }

    update();
  }, [updated]);

  useEffect(() => {
    async function updateSelectedId() {
      if (updatedId) {
        setSelectedId(updatedId);
        setUpdatedId(undefined);
      }
    }

    updateSelectedId();
  }, [updatedId]);

  useEffect(() => {
    async function del() {
      if (deletedId) {
        setIsLoading(true);

        try {
          await deleteTemplate(templates, deletedId);
          showAlert({ severity: "success", msg: alert.delete.success, open });
        } catch (err) {
          showAlert({ severity: "error", msg: alert.delete.fail, open });
        }

        setIsLoading(false);
      }

      setSelectedId(initialSelectedId());
    }

    del();
  }, [deletedId]);

  useEffect(() => {
    async function setTemplatesState() {
      if (ownerId.length) {
        setTemplates(await getTemplates(ownerId));
      } else {
        setTemplates([]);
      }
      setIsLoading(false);
    }

    setTemplatesState();
  }, []);

  const updateFavouriteTemplate = async (template: ITemplate) => {
    let updatedTemplates = { templates };
    try {
      updatedTemplates = await updateTemplate(templates, template);
    } catch (err) {
      showAlert({ severity: "error", msg: alert.save.fail, open });
    }
    setTemplates(updatedTemplates.templates);
  };

  const empty: ITemplate = {
    id: newTemplateId,
    title: "",
    content: "",
    signature: "",
    isFavourite: false,
    isCommon: false,
    ownerId,
  };

  function getTemplate(): ITemplate {
    if (selectedId === newTemplateId) {
      return empty;
    }
    const selectedItem = templates.find((item) => item.id === selectedId);

    return !selectedItem ? templates[0] : selectedItem;
  }

  return (
    <>
      {isLoading ? (
        <Box className="spinner-box">
          <Spinner color="var(--primary-color)" />
        </Box>
      ) : (
        <>
          <Sidebar>
            <Box className="add-button-box">
              <AddButton
                variant="contained"
                startIcon={<img src={plus} alt="add-template" />}
                onClick={() => {
                  setSelectedId(newTemplateId);
                  AnalyticsHelper.trackEvent(events.addTemplateClicked);
                }}
              >
                {constants.buttons.newTemplate}
              </AddButton>
            </Box>
            {templates.map((template) => (
              <SidebarTemplateItem
                key={`SidebarTemplate-${template.id}`}
                selectedItemId={selectedId}
                template={template}
                updateSelectedItemId={setSelectedId}
                updateFavouriteTemplate={updateFavouriteTemplate}
              />
            ))}
          </Sidebar>
          <Content>
            {/* 1st case: we have templates or we're adding the new one */}
            {templates.length || selectedId === newTemplateId ? (
              <TemplateEditor
                key={selectedId}
                template={getTemplate()}
                updateTemplate={setUpdated}
                deleteTemplate={setDeletedId}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
              />
            ) : <NoTemplates />}
          </Content>
        </>
      )}
    </>
  );
}
