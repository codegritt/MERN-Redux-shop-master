import React from "react";
import Footer4__box from "./Footer4.module.css";
import Footer__section1 from "./Footer4.module.css";
import Footer__section2 from "./Footer4.module.css";
import Footer__section3 from "./Footer4.module.css";
import Footer__section4 from "./Footer4.module.css";
import Footer__section5 from "./Footer4.module.css";
import Footer__sectionh5 from "./Footer4.module.css";
import Footer__sectionp from "./Footer4.module.css";
import Footer__button from "./Footer4.module.css";
import Sub__inputbox from "./Footer4.module.css";
import Sub__text from "./Footer4.module.css";
import Sub__texta from "./Footer4.module.css";
import FooterSection1data from "../constants/FooterSection1data";
import FooterSection2data from "../constants/FooterSection2data";
import FooterSection3data from "../constants/FooterSection3data";
import FooterSection4data from "../constants/FooterSection4data";

function Footer4() {
  return (
    <>
      <div className={Footer4__box.footer4__box}>
        <div className={Footer__section1.footer__section1}>
          <h5 className={Footer__sectionh5.footer__sectionh5}>POLICY INFO</h5>

          {FooterSection1data.map((data) => (
            <p className={Footer__sectionp.footer__sectionp}> {data.text}</p>
          ))}
        </div>

        <div className={Footer__section2.footer__section2}>
          <h5 className={Footer__sectionh5.footer__sectionh5}>COMPANY</h5>
          {FooterSection2data.map((data) => (
            <p className={Footer__sectionp.footer__sectionp}> {data.text}</p>
          ))}
        </div>

        <div className={Footer__section3.footer__section3}>
          <h5 className={Footer__sectionh5.footer__sectionh5}>
            SNAPDEAL BUSINESS
          </h5>
          {FooterSection3data.map((data) => (
            <p className={Footer__sectionp.footer__sectionp}> {data.text}</p>
          ))}
        </div>

        <div className={Footer__section4.footer__section4}>
          <h5 className={Footer__sectionh5.footer__sectionh5}>POPULAR LINKS</h5>

          {FooterSection4data.map((data) => (
            <p className={Footer__sectionp.footer__sectionp}> {data.text}</p>
          ))}
        </div>

        <div className={Footer__section5.footer__section5}>
          <h5 className={Footer__sectionh5.footer__sectionh5}>SUBSCRIBE</h5>
          <input
            type="text"
            placeholder="Your email address"
            className={Sub__inputbox.sub__inputbox}
          />
          <button className={Footer__button.footer__button}>SUBSCRIBE</button>

          <div className={Sub__text.sub__text}>
            <span>Register now to get updates on promotions and </span>
            <p>
              {" "}
              coupons.
              <a
                className={Sub__texta.sub__texta}
                href="https://play.google.com/store/apps/details?id=com.snapdeal.main"
              >
                Or Download App
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer4;
