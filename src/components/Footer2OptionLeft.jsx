import React from "react";
import Footer2LeftIcon from "./Footer2OptionLeft.module.css";

function Footer2OptionLeft({ Icon }) {
  return (
    <div className={Footer2LeftIcon.footer2leftIcon}>
      <div className={Footer2LeftIcon.footer2leftIcon}>{Icon && <Icon />}</div>
    </div>
  );
}

export default Footer2OptionLeft;
