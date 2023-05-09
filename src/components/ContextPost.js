import React, { useContext } from "react";
import { BooksContext } from "./Home";
import { Link } from "react-router-dom";
import Contextdiv from "./ContextPost.module.css";
import Contexthead from "./ContextPost.module.css";
import Contextspan from "./ContextPost.module.css";
import Contextimg from "./ContextPost.module.css";

const ContextPost = () => {
  const books = useContext(BooksContext);
  console.log(books);
  return (
    <div className={Contextdiv.contextdiv}>
      <img
        className={Contextimg.contextimg}
        src="https://img.freepik.com/free-vector/girl-reading-books-stack-books_1308-97387.jpg?w=2000"
        alt=""
      />
      <h4 className={Contexthead.contexthead}>Welcome to Snap Book Store !</h4>
      <Link to="/home2">
        <span className={Contextspan.contextspan}>*Click Here* </span>
      </Link>
    </div>
  );
};

export default ContextPost;
