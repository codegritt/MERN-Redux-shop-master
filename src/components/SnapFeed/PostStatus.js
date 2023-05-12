import React, { useMemo, useState } from "react";
import Post_statusmod from "./PostStatus.module.css";
import Post_statusmain from "./PostStatus.module.css";
import Openpostmodal from "./PostStatus.module.css";
import SnapModal from "./SnapModal";
import { postStatus, getStatus } from "../../api/FirestoreAPI";
import PostCard from "./PostCard";
import { getCurrentTimeStamp } from "../../Helpers/useMoment";

function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);

  const sendStatus = async () => {
    let object = {
      name: "Gokul",
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
    };

    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

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

      <div>
        {allStatuses.map((posts) => {
          return (
            <>
              <PostCard posts={posts} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PostStatus;
