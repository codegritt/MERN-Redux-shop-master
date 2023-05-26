import React from "react";
import footer1optionicon from "./Footer1Option.module.css";
import footer1optiontitle from "./Footer1Option.module.css";
import footer1optiontitle1 from "./Footer1Option.module.css";
import footer1option from "./Footer1Option.module.css";
import footer1option2 from "./Footer1Option.module.css";

function Footer1Option({ Icon, title, title1 }) {
  return (
    <div className={footer1option.footerr1Option}>
      <div className={footer1option2.footerr1Option2}>
        {Icon && <Icon className={footer1optionicon.footerr1Option__icon} />}
        <h2 className={footer1optiontitle.footer1Option__title}>{title}</h2>
        <h3 className={footer1optiontitle1.footer1Option__title1}>{title1}</h3>
      </div>
    </div>
  );
}

export default Footer1Option;
