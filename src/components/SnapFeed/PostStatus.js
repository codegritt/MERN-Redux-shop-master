import React, { useState } from "react";
import Post_statusmod from "./PostStatus.module.css";
import Post_statusmain from "./PostStatus.module.css";
import Openpostmodal from "./PostStatus.module.css";
import SnapModal from "./SnapModal";

function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatus = () => {};

  return (
    <div className={Post_statusmain.post_statusmain}>
      <div className={Post_statusmod.post_statusmod}>
        <button
          className={Openpostmodal.openpostmodal}
          onClick={() => setModalOpen(true)}
        >
          Start a Post
        </button>
      </div>

      <SnapModal
        status={status}
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
      />
    </div>
  );
}

export default PostStatus;
