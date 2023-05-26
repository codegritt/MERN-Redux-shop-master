import React, { useMemo, useState } from "react";
import { likePost, postComment } from "../../api/FirestoreAPI.jsx";
import { getCurrentTimeStamp } from "../../Helpers/useMoment.jsx";

import { AiOutlineComment } from "react-icons/ai";
import Like_container from "./LikeButton.module.css";
import Hr_line from "./LikeButton.module.css";
import Hr from "./LikeButton.module.css";
import Likecomment from "./LikeButton.module.css";
import Likescommentinner from "./LikeButton.module.css";
import Addcommentbtn from "./LikeButton.module.css";
import Likecontainerp from "./LikeButton.module.css";
import Cardcomment from "./LikeButton.module.css";
import Commentcontainer from "./LikeButton.module.css";
import ReplyCommentcontainer from "./LikeButton.module.css";
import Addreplycommentbtn from "./LikeButton.module.css";
import Replyreply from "./LikeButton.module.css";

export default function LikeButton({ userId, postId, currentUser }) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showreplyCommentBox, setShowreplyCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [replycomment, setreplyComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replycomments, setreplyComments] = useState([]);
  const handleLike = () => {
    likePost(userId, postId, liked);
  };
  // const getComment = (event) => {
  //   setComment(event.target.value);
  // };

  // const addComment = () => {
  //   postComment(comment, getCurrentTimeStamp("LLL"), currentUser?.name);
  //   setComment("");
  // };
  // useMemo(() => {
  //   getLikesByUser(userId, postId, setLiked, setLikesCount);
  //   getComments(postId, setComments);
  // }, [userId, postId]);

  const onClickHandler = async () => {
    setComments((comments) => [...comments, comment]);

    let object1 = {
      name: "Gokul",
      userEmail: "gokul@gmail.com",
      userName: "gokul",
      userID: "123456",
      comment: comment,
      timeStamp: getCurrentTimeStamp("LLL"),
    };

    await postComment(object1);

    await setComment("");
  };

  const onreplyClickHandler = async () => {
    setreplyComments((comments) => [...replycomments, replycomment]);

    let object2 = {
      name: "Gokul",
      userEmail: "gokul@gmail.com",
      userName: "gokul",
      userID: "123456",
      comment: comment,
      timeStamp: getCurrentTimeStamp("LLL"),
    };

    await postComment(object2);

    await setreplyComment("");
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onreplyChangeHandler = (e) => {
    setreplyComment(e.target.value);
  };

  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? +1 : +1));
      setIsLike(!isLike);
    };

  const [replylike, setreplyLike] = useState(0),
    [isreplyLike, setIsreplyLike] = useState(false),
    onLikereplyButtonClick = () => {
      setreplyLike(replylike + (isreplyLike ? +1 : +1));
      setIsreplyLike(!isreplyLike);
    };

  return (
    <>
      <div className={Like_container.like_container}>
        <p className={Likecontainerp.likecontainerp}>
          {like} People liked this Post
        </p>
        <div className={Hr_line.hr_line}>
          <hr className={Hr.hr} />
        </div>
        <button
          style={{
            fontSize: "11px",
            width: "60px",
            height: "25px",
            backgroundColor: "#C6003d",
            color: "whitesmoke",
            borderRadius: "3px",
            outline: "none",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          className={"like-button " + (isLike ? "liked" : "")}
          onClick={onLikeButtonClick}
        >
          {"Likes"} | {like}
        </button>
        <div className={Likecomment.likecomment}>
          <div
            className={Likescommentinner.likescommentinner}
            onClick={handleLike}
          ></div>
          <div
            className={Likescommentinner.likescommentinner}
            onClick={() => setShowCommentBox(!showCommentBox)}
          >
            {
              <AiOutlineComment
                size={30}
                style={{
                  color: "#C6003d",
                  position: "relative",
                  bottom: "12px",
                }}
                color={showCommentBox ? "#0a66c2" : "#212121"}
              />
            }

            <span className={Cardcomment.cardcomment}>Comments</span>
          </div>
        </div>
        {showCommentBox ? (
          <>
            <div className="main-container">
              {comments.map((text) => (
                <>
                  <div className={Commentcontainer.commentcontainer}>
                    {text}
                    <div></div>

                    <div className={Likecomment.likecomment}>
                      <div
                        className={Likescommentinner.likescommentinner}
                        onClick={handleLike}
                      ></div>
                    </div>
                  </div>

                  <button
                    style={{
                      fontSize: "11px",
                      width: "60px",
                      height: "15px",
                      backgroundColor: "whitesmoke",
                      color: "gray",
                      position: "relative",
                      bottom: "10px",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    className={"like-button " + (isreplyLike ? "liked" : "")}
                    onClick={onLikereplyButtonClick}
                  >
                    {"Likes"} | {replylike}
                  </button>
                  <div
                    onClick={() => setShowreplyCommentBox(!showreplyCommentBox)}
                  >
                    <span className={Replyreply.replyreply}>Reply</span>
                  </div>
                  {showreplyCommentBox ? (
                    <>
                      <div className="main-container">
                        {replycomments.map((text) => (
                          <>
                            <div
                              className={
                                ReplyCommentcontainer.replycommentcontainer
                              }
                            >
                              {text}
                              <div></div>

                              <div className={Likecomment.likecomment}>
                                <div
                                  className={
                                    Likescommentinner.likescommentinner
                                  }
                                  onClick={handleLike}
                                ></div>
                              </div>
                            </div>

                            <button
                              style={{
                                fontSize: "11px",
                                width: "60px",
                                height: "15px",
                                backgroundColor: "whitesmoke",
                                color: "gray",
                                position: "relative",
                                bottom: "10px",
                                outline: "none",
                                border: "none",
                                cursor: "pointer",
                                marginLeft: "5px",
                                left: "50px",
                              }}
                              className={
                                "like-button " + (isreplyLike ? "liked" : "")
                              }
                              onClick={onLikereplyButtonClick}
                            >
                              {"Likes"} | {replylike}
                            </button>
                            <div
                              onClick={() =>
                                setShowreplyCommentBox(!showreplyCommentBox)
                              }
                            >
                              <span className={Replyreply.replyreply}>
                                Reply
                              </span>
                            </div>
                          </>
                        ))}

                        <div className="comment-flexbox">
                          <input
                            style={{
                              height: "30px",
                              backgroundColor: "whitesmoke",
                              paddingLeft: "10px",
                              borderRadius: "3px",
                              border: "1px solid #737373",
                              color: "#4b4b4b",
                              fontSize: "12px",
                              fontWeight: "bold",
                              width: "73%",
                              left: "60px",
                              position: "relative",
                              top: "10px",
                              borderColor: "transparent",
                              textDecoration: "none",
                              boxShadow: "10px 5px 25px gray",
                            }}
                            onChange={onreplyChangeHandler}
                            placeholder="Add a Comment"
                            className="form-control"
                            name="replycomment"
                            value={replycomment}
                          />

                          <button
                            className={Addreplycommentbtn.addreplycommentbtn}
                            onClick={onreplyClickHandler}
                          >
                            Add Comment
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}

              <div className="comment-flexbox">
                <input
                  style={{
                    height: "30px",
                    backgroundColor: "whitesmoke",
                    paddingLeft: "10px",
                    borderRadius: "3px",
                    border: "1px solid #737373",
                    color: "#4b4b4b",
                    fontSize: "12px",
                    fontWeight: "bold",
                    width: "97%",
                    position: "relative",
                    top: "10px",
                    borderColor: "transparent",
                    textDecoration: "none",
                    boxShadow: "10px 5px 25px gray",
                  }}
                  onChange={onChangeHandler}
                  placeholder="Add a Comment"
                  className="form-control"
                  name="comment"
                  value={comment}
                />

                <button
                  className={Addcommentbtn.addcommentbtn}
                  onClick={onClickHandler}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
