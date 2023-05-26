import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Bookh2 from "./BookCard.module.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height={150}
      />
      <div className="desc">
        <h3 className={Bookh2.bookh2}>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h3>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
