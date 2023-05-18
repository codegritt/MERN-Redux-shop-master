import React from "react";
import "./SupportWindow.css";
import { styles } from "../styles";
import Chat from "./Chat";

const SupportWindow = (props) => {
  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <Chat />
    </div>
  );
};

export default SupportWindow;
