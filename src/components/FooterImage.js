import React from "react";
import Homepagesection from "./FooterImage.module.css";
import DownloadAppLeftImgContainer from "./FooterImage.module.css";
import DownloadAppMainIcon from "./FooterImage.module.css";
import DownloadAppTextCont from "./FooterImage.module.css";
import DownloadAppHeading from "./FooterImage.module.css";
import DownloadAppHeadingP from "./FooterImage.module.css";
import DownloadAppHeadingP1 from "./FooterImage.module.css";
import GreatDealsBtnCont from "./FooterImage.module.css";
import dp_widget_link from "./FooterImage.module.css";
import dp_widget_linkImg from "./FooterImage.module.css";
import dp_widget_linkImg2 from "./FooterImage.module.css";
import DownloadBackImage from "./FooterImage.module.css";

function FooterImage() {
  return (
    <>
      <div className={Homepagesection.homePageSection}>
        <img
          src="https://i2.sdlcdn.com/img/leaves2x.png"
          alt=""
          className={DownloadBackImage.downloadBackImage}
        />
        <div
          className={DownloadAppLeftImgContainer.downloadAppLeftImgContainer}
        >
          <img
            className={DownloadAppMainIcon.downloadAppMainIcon}
            src="https://i2.sdlcdn.com/img/appScreenshot@1x.png"
            alt=""
          />
        </div>
        <div className={DownloadAppTextCont.downloadAppTextCont}>
          <div className={DownloadAppHeading.downloadAppHeading}>
            <p className={DownloadAppHeadingP.downloadAppHeadingP}>
              Download Snapdeal App Now
            </p>
          </div>
          <p className={DownloadAppHeadingP1.downloadAppHeadingP1}>
            Fast, Simple & Delightful.{" "}
          </p>
          <p className={DownloadAppHeadingP1.downloadAppHeadingP1}>
            All it takes is 30 seconds to Download.
          </p>
          <div className={GreatDealsBtnCont.greatDealsBtnCont}>
            <a
              href="https://apps.apple.com/in/app/snapdeal-online-shopping-india/id721124909?ls=1&utm_campaign=ios&utm_source=mobileAppLp"
              className={dp_widget_link.dp_widget_link}
            >
              <img
                src="https://w7.pngwing.com/pngs/270/658/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.png"
                alt=""
                className={dp_widget_linkImg.dp_widget_linkImg}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=mobileAppLp&utm_campaign=android"
              className={dp_widget_link.dp_widget_link}
            >
              <img
                src="https://w7.pngwing.com/pngs/49/106/png-transparent-android-google-play-app-store-google-play-text-computer-logo.png"
                alt=""
                className={dp_widget_linkImg2.dp_widget_linkImg2}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterImage;
