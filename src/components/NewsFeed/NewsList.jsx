import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "./NewsItem.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=content&apiKey=1e57ca0ef8c84803be1fdaab34d54eb4`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <>
      <div className="main-news-div">
        <span className="main-news-header">SNAP NEWS DAILY</span>
        {articles.map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
