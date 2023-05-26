/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Footer1Option from "./Footer1Option";
import footer__bar from "./Footer1Option.module.css";
import footerbar__img from "./Footer1.module.css";

function Footer1() {
  return (
    <>
      {/* <div className={footer__img.footer1__img}>
        <img
          className={footer__img1.footer1__img1}
          src="https://www.karobargain.com/wp-content/uploads/2021/12/Snapdeal-Changes-Its-Logo-And-Tagline.jpg"
          alt=""
        />
        <img
          className={footer__img2.footer1__img2}
          src="https://ogimgs.apkcombo.org/eyJsb2dvIjoiaHR0cHM6Ly9wbGF5LWxoLmdvb2dsZXVzZXJjb250ZW50LmNvbS9tdXMzTG1ETktIaWtET0pISW95YU91WU9fS19UZ2FzckhLS0tXTFFDdmtzbjZ2Uk4zMnJOTjlQWWh3cHRyRld3bW5jPXMyMDAiLCJ0aXRsZSI6ICJEb3dubG9hZCBTbmFwZGVhbDogT25saW5lIFNob3BwaW5nIEFwcCBBUEsifQ==/download-snapdeal-online-shopping-app-apk"
          alt=""
        />
      </div> */}

      <div className={footer__bar.footer1__bar}>
        <div>
          <a href="https://www.snapdeal.com/page/terms-of-sale">
            <img
              className={footerbar__img.footer1bar__img}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61i5pQp2fQnHIjtroX5kw7lW0gqiJgvKtxg&usqp=CAU"
              alt=""
            />
          </a>

          <Footer1Option
            title="100% SECURE PAYMENTS"
            title1="Moving your card details to a much more secured place"
          ></Footer1Option>
        </div>
        <div>
          <a href="https://www.snapdeal.com/page/TrustPay">
            <img
              className={footerbar__img.footer1bar__img}
              src="https://banner2.cleanpng.com/20190523/css/kisspng-royalty-free-vector-graphics-illustration-stock-ph-converting-http-to-https-black-raven-media-llc-mi-5ce75f9105c1b2.7637655815586671530236.jpg"
              alt=""
            />
          </a>

          <Footer1Option
            title="TRUSTPAY"
            title1="100% Payment Protection. Easy Return Policy"
          ></Footer1Option>
        </div>
        <div>
          <a href="https://www.snapdeal.com/help?redirectFrom=footerstrip">
            <img
              className={footerbar__img.footer1bar__img}
              src="https://static.vecteezy.com/system/resources/previews/019/152/968/original/3d-minimal-call-center-operator-icon-online-adviser-concept-consulting-clients-online-headphone-with-a-message-icon-3d-illustration-png.png"
              alt=""
            />
          </a>

          <Footer1Option
            title="HELP CENTER"
            title1="Got a question? Look no further. Browse our FAQs or submit your query
        here."
          ></Footer1Option>
        </div>
        <div>
          {" "}
          <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=web_footer&utm_campaign=android&pli=1">
            <img
              className={footerbar__img.footer1bar__img}
              src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-smartphone-icon-png-image_1003223.jpg"
              alt=""
            />
          </a>
          <Footer1Option
            title="SHOP ON THE GO"
            title1="Download the app and get exciting app only offers at your fingertips"
          ></Footer1Option>
        </div>
      </div>
    </>
  );
}

export default Footer1;
