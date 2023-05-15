import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h3 className="news-h">
          <a href={url}>{title}</a>
        </h3>
        <p className="news-desc">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
