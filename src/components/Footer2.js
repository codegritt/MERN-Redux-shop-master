import React from "react";
import Footer2__bar from "./Footer2OptionLeft.module.css";
import Footer2__barh4 from "./Footer2OptionLeft.module.css";
import Footer2OptionRight from "./Footer2OptionRight";
import Footer2OptionRightarea from "./Footer2OptionRight.module.css";
import Footer2OptionRightareah4 from "./Footer2OptionRight.module.css";
import FooterIconsImg1 from "./Footer2OptionLeft.module.css";
import FooterIconsImg2 from "./Footer2OptionLeft.module.css";
import FooterIconsImg3 from "./Footer2OptionLeft.module.css";
import FooterIconsImg4 from "./Footer2OptionLeft.module.css";
import FooterIconsImg5 from "./Footer2OptionLeft.module.css";
import FooterIconsImg6 from "./Footer2OptionLeft.module.css";
import Footerentire from "./Footer2OptionLeft.module.css";

function Footer2() {
  return (
    <>
      <div className={Footerentire.footerentire}>
        <h4 className={Footer2__barh4.footer2__barh4}>PAYMENT</h4>
        <div className={Footer2__bar.footer2__bar}>
          <img
            className={FooterIconsImg1.footerIconsImg1}
            src="https://cdn-icons-png.flaticon.com/512/2695/2695971.png"
            alt=""
          />
          <img
            className={FooterIconsImg2.footerIconsImg2}
            src="https://cdn0.iconfinder.com/data/icons/major-credit-cards-colored/48/JD-15-512.png"
            alt=""
          />
          <img
            className={FooterIconsImg3.footerIconsImg3}
            src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135018-mastercard_82253.png"
            alt=""
          />
          <img
            className={FooterIconsImg4.footerIconsImg4}
            src="https://cdn-icons-png.flaticon.com/512/893/893081.png"
            alt=""
          />
          <img
            className={FooterIconsImg5.footerIconsImg5}
            src="https://e7.pngegg.com/pngimages/510/354/png-clipart-food-indian-cuisine-bangladeshi-cuisine-devops-dubai-cash-on-delivery-text-logo-thumbnail.png"
            alt=""
          />
          <img
            className={FooterIconsImg6.footerIconsImg6}
            src="https://static.vecteezy.com/system/resources/thumbnails/000/291/402/small_2x/15__281_29.jpg"
            alt=""
          />
        </div>

        <h4 className={Footer2OptionRightareah4.footer2righth4}>CONNECT</h4>
        <div className={Footer2OptionRightarea.footer2right}>
          <Footer2OptionRight />
        </div>
      </div>
    </>
  );
}

export default Footer2;
