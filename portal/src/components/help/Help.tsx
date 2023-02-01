import React from "react";
import { Box } from "@material-ui/core";
import "./help.css";
import { Ripple } from "react-spinners-css";
import constants from "../../resources/constants";
import starOutlined from "../../assets/star-outlined.svg";
import logoFetching from "../../assets/logo_fetching.png";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.svg";

interface ITipProps {
  children: React.ReactNode;
}

function Tip(props: ITipProps): JSX.Element {
  const { children } = props;
  return (
    <Box className="tip">
      <li className="help">
        {children}
      </li>
    </Box>
  );
}

export default function Help(): JSX.Element {
  const {
    intro, tips, devsInfo, email, introEnd,
  } = constants.helpTab;
  return (
    <Box className="help-box">
      <div className="intro">
        {intro}
        <b className="assistant">{constants.assistant}</b>
        {introEnd}
      </div>

      <div className="tips-title" style={{ fontSize: "1.2rem", color: "var(--primary-color)", fontWeight: "bold" }}>
        {tips.title}
      </div>
      <ul className="help">
        <li className="help">{tips.sameEmailTip}</li>
        <Tip>
          {tips.favTip}
          <img className="img-tip" src={starOutlined} alt="star" />
        </Tip>
        <Tip>
          {tips.candidateTip}
          <i>
            {constants.candidateName}
          </i>
          {tips.candidateTipMiddle}
          <img className="img-tip" src={profile} alt="profile" />
          {tips.candidateTipEnd}
        </Tip>
        <Tip>
          {tips.grayIconTip}
          <img className="img-tip" src={logoFetching} width="4%" alt="logo-fetching" />
          {tips.grayIconTipEnd}
        </Tip>
        <Tip>
          {tips.blueIconTip}
          <img className="img-tip" src={logo} width="4%" alt="logo" />
          {tips.blueIconTipEnd}
        </Tip>
        <Tip>
          {tips.rippleTip}
          <Ripple className="ripple" color="var(--primary-color)" size={50} />
          {tips.rippleTipEnd}
        </Tip>
      </ul>

      <div className="devs-info">
        {devsInfo}
        <a className="help" href="mailto:igor.krasavin@akvelon.com?subject=Question about Recruiter's Assistant">{email}</a>
      </div>
    </Box>
  );
}
