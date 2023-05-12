import React from "react";
import Postcardmain from "./PostCard.module.css";
import Statusmain from "./PostCard.module.css";
import Timestampmain from "./PostCard.module.css";
import Namemain from "./PostCard.module.css";
import LikeButton from "./LikeButton";

function PostCard({ posts }) {
  return (
    <div className={Postcardmain.postcardmain}>
      <p className={Namemain.namemain}>{posts.name}</p>
      <p className={Timestampmain.timestampmain}>{posts.email}</p>
      <p className={Timestampmain.timestampmain}>{posts.timeStamp}</p>
      <p className={Statusmain.statusmain}>{posts.status}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
