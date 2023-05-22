/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Notecontainer from "./NotificationComp.module.css";
import Chatlist from "./NotificationComp.module.css";

export default () => {
  return (
    <div className={Notecontainer.notecontainer}>
      <div className={Chatlist.chatlist}>
        <p>Gokul</p>
      </div>
    </div>
  );
};
