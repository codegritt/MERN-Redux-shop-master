import React, { createContext } from "react";
import AppHome from "./Home.module.css";
import App__body from "./Home.module.css";
import Sidebar from "./Sidebar";
import ToggleCard from "./ToggleCard";
import ReduxHome from "./Redux/ReduxHome";
import Main__body from "./Home.module.css";
import FeedAPIstore from "./FeedAPIstore";
import Footer__body from "./Home.module.css";
import FooterImage from "./FooterImage";
import Footer1 from "./Footer1";
import Footer4 from "./Footer4";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import UseContextHook from "./Hooks/UseContextHook";
import ImageSlider from "./ImageSlider";

export const BooksContext = createContext();

function Home() {
  return (
    <>
      <div className={AppHome.appHome}>
        <div className={App__body.app__body}>
          <Sidebar />
          <ImageSlider />
          <ToggleCard />
          <BooksContext.Provider value={true}>
            <div style={{ position: "relative", right: "100px", top: "350px" }}>
              <UseContextHook />
            </div>
          </BooksContext.Provider>
        </div>
        <div className={Main__body.main__body}>
          <ReduxHome />
          <FeedAPIstore />
        </div>
        <div className={Footer__body.footer__body}>
          <FooterImage />
          <Footer1 />
          <Footer4 />
          <Footer2 />
          <Footer3 />
        </div>
      </div>
    </>
  );
}

export default Home;
