import React from "react";
import header1Option from "./Header1.module.css";
import header1Option__title from "./Header1.module.css";

function Header1Option({ Icon, title }) {
  return (
    <>
      <div className={header1Option.header1Option}>
        {Icon && <Icon className="header1Option__icon" />}
        <h3 className={header1Option__title.header1Option__title}>{title}</h3>
      </div>
    </>
  );
}

export default Header1Option;
