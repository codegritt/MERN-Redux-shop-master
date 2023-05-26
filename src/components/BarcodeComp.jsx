import React from "react";
import Barcode from "./BarcodeComp.module.css";
import Barcodeimg from "./BarcodeComp.module.css";
import Barimage from "./BarcodeComp.module.css";
import Barcodeinfo from "./BarcodeComp.module.css";
import Head from "./BarcodeComp.module.css";
import Desc from "./BarcodeComp.module.css";

function BarcodeComp() {
  return (
    <>
      <>
        <div class={Barcode.nav_bottom_barcode}>
          <div class={Barcodeimg.barCodImg}>
            <img
              className={Barimage.barimage}
              src="https://img.freepik.com/premium-vector/vector-qr-code_714799-366.jpg?w=2000"
              alt=""
            />
          </div>
          <div class={Barcodeinfo.bar_code_info}>
            <span class={Head.head}>Enjoy Convenient Order Tracking</span>
            <span class={Desc.desc}>Scan to download app</span>
          </div>
        </div>
      </>
    </>
  );
}

export default BarcodeComp;
