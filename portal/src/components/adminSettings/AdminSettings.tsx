import React from "react";
import Content from "../content/Content";
import Sidebar from "../sidebar/Sidebar";
import AdminSettingEditor from "../adminSettingEditor/AdminSettingEditor";

export default function AdminSettings(): JSX.Element {
  // TODO remove after the actual conections are implemented
  const adminSettingsId = 2;
  return (
    <>
      <Sidebar>
        {/* TODO add the actual items */}
        <div>
          Admin Sidebar
        </div>
      </Sidebar>
      <Content>
        <AdminSettingEditor index={adminSettingsId} />
      </Content>
    </>
  );
}
