import React from "react";
import header1 from "./Header1.module.css";
import header1span from "./Header1.module.css";
import Header1Option from "./Header1Option";
import header1__right from "./Header1.module.css";
import header1__left from "./Header1.module.css";
import header1__righttext from "./Header1.module.css";
import header1__logout from "./Header1.module.css";
import { Link } from "react-router-dom";

function Header1() {
  return (
    <div className={header1.header1}>
      <div className={header1__left.header1__left}>
        <span className={header1span.header1span}>
          Brand Waali Quality, Bazaar Waali Deal!
        </span>
      </div>

      <div className={header1__right.header1__right}>
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Home"
        />
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Impact@Snapdeal"
        />
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Gift cards"
        />
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Help center"
        />
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Sell on Snapdeal"
        />
        {/* <Header1Option
          Icon={PhoneIphoneIcon}
          className={header1spanIcon.header1spanIcon}
        /> */}
        <Header1Option
          className={header1__righttext.header1__righttext}
          title="Download App"
        />

        <Link
          className={header1__logout.header1__logout}
          style={{ float: "right" }}
          to={"/login"}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header1;
