import React from "react";
import Postcardmain from "./PostCard.module.css";
import Statusmain from "./PostCard.module.css";
import Timestampmain from "./PostCard.module.css";
import Namemain from "./PostCard.module.css";
import LikeButton from "./LikeButton";
import { BsPencil, BsTrash } from "react-icons/bs";
import { deletePost } from "../../api/FirestoreAPI";
import Editicon from "./PostCard.module.css";
import Trashicon from "./PostCard.module.css";

function PostCard({ posts, getEditData }) {
  return (
    <div className={Postcardmain.postcardmain}>
      <p className={Namemain.namemain}>{posts.name}</p>
      <p className={Timestampmain.timestampmain}>{posts.email}</p>
      <p className={Timestampmain.timestampmain}>{posts.timeStamp}</p>

      <div className="action-container">
        <BsTrash
          size={30}
          className={Trashicon.trashicon}
          onClick={() => deletePost(posts.id)}
        />
        <BsPencil
          size={30}
          className={Editicon.editicon}
          onClick={() => getEditData(posts)}
        />
      </div>
      <p className={Statusmain.statusmain}>{posts.status}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
