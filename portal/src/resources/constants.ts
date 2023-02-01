import { NIL as NIL_UUID } from "uuid";

const constants = {
  tabs: [
    "Templates", "Settings", /* "Admin settings", */ "Help",
  ],
  googleFunc: {
    manageTemplates: "https://europe-west1-recruiters-extension.cloudfunctions.net/manage-templates/",
  },
  auth: {
    clientId: "310172944435-cbidricloj1980ccvm6s3hkjtq4k2ffg.apps.googleusercontent.com",
  },
  actionLogs: {
    gotResult: "Got result from Google Function",
    fetch: "Fetching",
    update: "Updating templates",
    delete: "Deleting",
  },
  requestMethod: {
    POST: "POST",
    DELETE: "DELETE",
  },
  buttons: {
    save: "Save",
    delete: "Delete",
    remove: "Remove",
    cancel: "Cancel",
    candidateName: "Candidate Name",
    signature: "Signature",
    newTemplate: "New Template",
    login: "Login",
    logout: "Logout",
  },
  newTemplateId: NIL_UUID,
  email: "email",
  noTemplates: { title: "You don't have templates", subtitle: "Create your first template to use it in extension" },
  emptyTitleMessage: "You can't save template without title",
  removeTemplateMessage: "Are you sure you want to remove the template?",
  templateText: "Template text",
  title: "Title",
  assistant: "Recruiter's Assistant",
  helpTab: {
    intro: "We hope ",
    introEnd: " will help you with everyday tasks. We're still in the developing phase, so some things are not perfect. New ideas & suggestions are welcome",
    tips: {
      title: "Tips",
      sameEmailTip: "For correct work, you should be signed in with the same account on the portal & on the extension",
      favTip: "To see a template on the extension, you should add it to your favorites by clicking on",
      candidateTip: "You can add ",
      candidateTipMiddle: " to a template by clicking on",
      candidateTipEnd: ". The extension will put the person's name in the right spot of the template when you're on his/her LinkedIn page",
      grayIconTip: "If the extension icon looks like this",
      grayIconTipEnd: ", then the search is on, & you need to wait a little bit",
      blueIconTip: "When the extension icon looks like this",
      blueIconTipEnd: ", & you still didn't get the info, or you see that the candidate name is wrong in a template, try to close & open it back",
      rippleTip: "If you see ",
      rippleTipEnd: " for 2-3 minutes on the extension & the extension icon is still gray, you can reload the page & try again. If nothing has changed, contact developers",
    },
    devsInfo: "If you have any trouble with the extension or the portal, please, contact Igor Krasavin in Slack or via email: ",
    email: "igor.krasavin@akvelon.com",
  },
  alert: {
    save: {
      success: "Template is saved!",
      fail: "Something went wrong! Please, try to save the template later",
    },
    delete: {
      success: "Template is deleted!",
      fail: "Something went wrong! Please, try to delete the template later",
    },
  },
  events: {
    addTemplateClicked: "add_template_clicked",
    saveClicked: "save_template_clicked",
    cancelClicked: "cancel_deleting_template_clicked",
    deleteClicked: "delete_template_clicked",
    removeClicked: "remove_template_clicked",

    favoured: "favoured",
    unfavoured: "unfavoured",

    addCandidateName: "add_candidate_name",
    addEmoji: "add_emoji",

    emailNotSet: "email_not_set",

    loginSuccess: "login_success",
    loginFail: "login_fail",
    logoutSuccess: "logout_success",
    logoutFail: "logout_fail",
  },
  candidateName: "CandidateName",
  errorMessage: "Unexpected error during process",
  portalHostname: "recruiters-extension.ew.r.appspot.com",
};

export default constants;
