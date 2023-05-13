import React, { useMemo, useState } from "react";
import {
  likePost,
  getLikesByUser,
  postComment,
  getComments,
} from "../../api/FirestoreAPI.js";
import { getCurrentTimeStamp } from "../../Helpers/useMoment.js";

import { AiOutlineComment } from "react-icons/ai";
import Like_container from "./LikeButton.module.css";
import Hr_line from "./LikeButton.module.css";
import Hr from "./LikeButton.module.css";
import Likecomment from "./LikeButton.module.css";
import Likescommentinner from "./LikeButton.module.css";
import Addcommentbtn from "./LikeButton.module.css";
import Allcomments from "./LikeButton.module.css";
import Allcommentsname from "./LikeButton.module.css";
import Allcommentscomment from "./LikeButton.module.css";
import Allcommentstimestamp from "./LikeButton.module.css";
import Likecontainerp from "./LikeButton.module.css";
import Cardcomment from "./LikeButton.module.css";

export default function LikeButton({ userId, postId, currentUser }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleLike = () => {
    likePost(userId, postId, liked);
  };
  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(postId, comment, getCurrentTimeStamp("LLL"), currentUser?.name);
    setComment("");
  };
  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
  }, [userId, postId]);

  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? +1 : +1));
      setIsLike(!isLike);
    };

  return (
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
              style={{ color: "#C6003d", position: "relative", bottom: "12px" }}
              color={showCommentBox ? "#0a66c2" : "#212121"}
            />
          }

          <span className={Cardcomment.cardcomment}>Comments</span>
        </div>
      </div>
      {showCommentBox ? (
        <>
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
            }}
            onChange={getComment}
            placeholder="Add a Comment"
            // className={Commentinput.commentinput}
            className="form-control"
            name="comment"
            value={comment}
          />
          <button className={Addcommentbtn.addcommentbtn} onClick={addComment}>
            Add Comment
          </button>

          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className={Allcomments.allcomments}>
                  <p className={Allcommentsname.allcommentsname}>
                    {comment.name}
                  </p>
                  <p className={Allcommentscomment.allcommentscomment}>
                    {comment.comment}
                  </p>

                  <p className={Allcommentstimestamp.allcommentstimestamp}>
                    {comment.timeStamp}
                  </p>
                  {/* 
                  <p>•</p>
                   */}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
