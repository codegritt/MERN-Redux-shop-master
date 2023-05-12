import React, { useMemo } from "react";
import PostStatus from "./PostStatus";
import Sidebar from "../Sidebar";
import Footer__body from "../Home.module.css";
import FooterImage from "../FooterImage";
import Footer1 from "../Footer1";
import Footer4 from "../Footer4";
import Footer2 from "../Footer2";
import Footer3 from "../Footer3";
import { getCurrentUserData } from "../../api/FirestoreAPI";

function SnapFeed() {
  useMemo(() => {
    getCurrentUserData();
  }, []);
  return (
    <div>
      <Sidebar />

      <PostStatus />

      <div className={Footer__body.footer__body}>
        <FooterImage />
        <Footer1 />
        <Footer4 />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  );
}

export default SnapFeed;
