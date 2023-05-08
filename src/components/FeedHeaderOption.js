import React from "react";
import FeedOption from "./FeedHeaderOption.module.css";
import FeedOptionTitle from "./FeedHeaderOption.module.css";

function FeedHeaderOption({ title }) {
  return (
    <div className={FeedOption.FeedOption}>
      <h3 className={FeedOptionTitle.FeedOption__title}>{title}</h3>
    </div>
  );
}

export default FeedHeaderOption;
