import React from "react";
import Label from "./ToggleCard.module.css";
import Flip_card from "./ToggleCard.module.css";
import Front from "./ToggleCard.module.css";
import Sidebar2Img from "./ToggleCard.module.css";
import sidebar2spanD from "./ToggleCard.module.css";
import sidebar2span from "./ToggleCard.module.css";
import Checkavail from "./ToggleCard.module.css";
import sidebarInput from "./ToggleCard.module.css";
import sidebar2button from "./ToggleCard.module.css";
import sidebar2Searchbutton from "./ToggleCard.module.css";
import sidebar2Nextbutton from "./ToggleCard.module.css";
import Back from "./ToggleCard.module.css";
import WidgetImage from "./ToggleCard.module.css";
import CommonFreeCharge from "./ToggleCard.module.css";
import Snapbutton from "./ToggleCard.module.css";
import Controls from "./ToggleCard.module.css";
import NewUserRegister from "./ToggleCard.module.css";
import RegisterNbaLink from "./ToggleCard.module.css";
import Rfloat from "./ToggleCard.module.css";

export default function ToggleCard() {
  return (
    <div className={Label.label}>
      <div className={Flip_card.flip_card}>
        <div className={Front.front}>
          <div className={WidgetImage.widgetImage}>
            <img
              className={WidgetImage.widgetImage}
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/29/783751-snapdeal-zee.jpg"
              alt=""
            />
          </div>
          <div className={CommonFreeCharge.commonFreeCharge}>
            <p>Login to your</p>
            <p>Snapdeal account</p>
          </div>
          <a href="https://www.snapdeal.com/login">
            <button className={Snapbutton.snapbutton}>LOG IN</button>
          </a>

          <div className={Controls.controls}>
            <div className={NewUserRegister.newUserRegister}>
              New User?
              <span className={RegisterNbaLink.registerNbaLink}>Register</span>
            </div>
            <button className={Rfloat.rfloat}>
              <span>NEXT</span>
            </button>
          </div>
        </div>

        <div className={Back.back}>
          {/* <div className={Sidebar2panel.sidebar2}> */}
          <img
            className={Sidebar2Img.sidebar2img}
            src="https://e7.pngegg.com/pngimages/197/727/png-clipart-google-map-illustration-computer-icons-map-location-icon-web-design-google-maps.png"
            alt=""
          />

          <span className={sidebar2spanD.sidebar2spanD}>
            Your Delivery Pincode
          </span>

          {/* <div className={sidebar2content.sidebar2content}> */}
          <p className={sidebar2span.sidebar2span}>
            Enter your pincode to check availability and faster delivery options
          </p>
          {/* </div> */}

          <div className={Checkavail.checkavail}>
            <input
              className={sidebarInput.sidebar__Input}
              type="text"
              placeholder="Enter pincode"
            />
          </div>

          <div className={sidebar2button.sidebar2button}>
            <button className={sidebar2Searchbutton.sidebar2Searchbutton}>
              SUBMIT
            </button>
            &nbsp; &nbsp;
            <button className={sidebar2Nextbutton.sidebar2Nextbutton}>
              NEXT
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
