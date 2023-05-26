import React, { Component } from "react";
import "./ImageSlider.css";
import { Slide } from "react-slideshow-image";
import BarcodeComp from "./BarcodeComp";
import FeedHeaderOption from "./FeedHeaderOption";
import Feed__header from "./FeedHeaderOption.module.css";

class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    const slideImages = [
      "https://blog.snapdeal.com/wp-content/uploads/2018/09/IMG-2.jpg",
      "https://sugermint.com/wp-content/uploads/2020/03/Snapdeal-waives-off-penalty-on-sellers.jpg",
      "https://entrackr.com/storage/2018/07/snapdeal-1-1200x600.jpg",
    ];
    const properties = {
      duration: 3000,
      transitionDuration: 300,
      infinite: true,
      arrows: true,
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      // },
    };

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
        <div className={Feed__header.feed__header}>
          <FeedHeaderOption title="BOB" />
          ||
          <FeedHeaderOption title="Health" /> ||
          <FeedHeaderOption title="Westerwear" /> ||
          <FeedHeaderOption title="KurtaSets" /> ||
          <FeedHeaderOption title="KitchenNeed" />
        </div>
        <BarcodeComp />
      </div>
    );
  }
}

export default ImageSlider;
