import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Likecontainer from "./LikeButton.module.css";
import Likecontainerp from "./LikeButton.module.css";
import Likecontainericon from "./LikeButton.module.css";

function LikeButton() {
  return (
    <div className={Likecontainer.likecontainer}>
      <FontAwesomeIcon
        className={Likecontainericon.likecontainericon}
        icon={faThumbsUp}
      />
      <p className={Likecontainerp.likecontainerp}>Like</p>
    </div>
  );
}

export default LikeButton;
