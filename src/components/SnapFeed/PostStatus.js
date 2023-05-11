import React, { useState } from "react";
import Post_statusmod from "./PostStatus.module.css";
import Post_statusmain from "./PostStatus.module.css";
import Openpostmodal from "./PostStatus.module.css";
import SnapModal from "./SnapModal";

function PostStatus() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={Post_statusmain.post_statusmain}>
      <div className={Post_statusmod.post_statusmod}>
        <button className={Openpostmodal.openpostmodal} onClick={showModal}>
          Start a Post
        </button>
      </div>

      <SnapModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default PostStatus;
