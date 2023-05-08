import React from "react";

import ImageSliderbar from "./Feed.module.css";
import FeedHeaderOption from "../components/FeedHeaderOption";
import Feed__header from "./FeedHeaderOption.module.css";
import BarcodeComp from "./BarcodeComp";
import Carousel from "./Carousel";

function Feed() {
  return (
    <>
      <div className={ImageSliderbar.Imagesliderbar}>
        <Carousel />
        <div className={Feed__header.feed__header}>
          <FeedHeaderOption title="BOB" />
          ||
          <FeedHeaderOption title="Health" /> ||
          <FeedHeaderOption title="Westerwear" /> ||
          <FeedHeaderOption title="KurtaSets" /> ||
          <FeedHeaderOption title="KitchenNeed" />
        </div>
      </div>
      <BarcodeComp />
    </>
  );
}

export default Feed;
