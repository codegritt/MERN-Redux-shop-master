import React from "react";
import Postcardmain from "./PostCard.module.css";
import Statusmain from "./PostCard.module.css";
import Timestampmain from "./PostCard.module.css";

function PostCard({ posts }) {
  return (
    <div className={Postcardmain.postcardmain}>
      <p className={Timestampmain.timestampmain}>{posts.timeStamp}</p>
      <p className={Statusmain.statusmain}>{posts.status}</p>
    </div>
  );
}

export default PostCard;
