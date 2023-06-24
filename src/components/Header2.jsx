/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import headerSearch from "./Header2.module.css";
import header2Left from "./Header2.module.css";
import headerSearchButton from "./Header2.module.css";
import headerSearchButtonClass from "./Header2.module.css";
import header2img from "./Header2.module.css";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import header2imga from "./Header2.module.css";
import header2__rightbuttons from "./Header2.module.css";
import Snapfeedtext from "./Header2.module.css";
import Snapfeedicon from "./Header2.module.css";
import { Link } from "react-router-dom";
import Autocomplete from "./AutoComplete";
import { autoCompleteData } from "./data";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header2() {
  return (
    <>
      <div className={header2Left.header2__left}>
        <Link className={header2imga.header2__left_imga} to="/">
          <img
            className={header2img.header2__left_img}
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </Link>

        <div className={headerSearch.header__search}>
        
          <Autocomplete data={autoCompleteData} />
        </div>

        <div className={headerSearchButtonClass.header__searchbuttonClass}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <button className={headerSearchButton.header__searchbutton}>
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faMagnifyingGlass}
            />
            Search
          </button>
        </div>

        <div className={header2__rightbuttons.header2__rightbuttons}>
          <Link className={Snapfeedtext.snapfeedtext} to="/snapfeed">
            <span>Feed</span>
            <FontAwesomeIcon
              className={Snapfeedicon.snapfeedicon}
              icon={faInbox}
            />
          </Link>

          <LoginModal />

          <CartModal />
        </div>
      </div>
    </>
  );
}

export default Header2;
