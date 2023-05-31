import React from "react";
import { Notestyles } from "../Notestyles";
import NotificationComp from "./NotificationComp";
import "./NotificationWindow.css";

const NotificationWindow = (props) => {
  return (
    <div 
      className="notetransition-5"
      style={{
        ...Notestyles.NotesupportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <NotificationComp />
    </div>
  );
};

export default NotificationWindow;
