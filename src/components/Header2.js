/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import headerSearch from "./Header2.module.css";
import headerSearchInput from "./Header2.module.css";
import header2Left from "./Header2.module.css";
import headerSearchButton from "./Header2.module.css";
import headerSearchButtonClass from "./Header2.module.css";
import header2img from "./Header2.module.css";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import header2imga from "./Header2.module.css";
import header2__rightbuttons from "./Header2.module.css";

function Header2() {
  return (
    <>
      <div className={header2Left.header2__left}>
        <a
          className={header2imga.header2__left_imga}
          href="https://www.snapdeal.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={header2img.header2__left_img}
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </a>

        <div className={headerSearch.header__search}>
          <input
            // className="form-control"
            className={headerSearchInput.header__search_Input}
            type="text"
            placeholder="Search for products & brands"
          />
        </div>

        <div className={headerSearchButtonClass.header__searchbuttonClass}>
          <button className={headerSearchButton.header__searchbutton}>
            {/* <SearchIcon /> */}
            Search
          </button>
        </div>

        <div className={header2__rightbuttons.header2__rightbuttons}>
          <LoginModal />

          <CartModal />
        </div>
      </div>
    </>
  );
}

export default Header2;
