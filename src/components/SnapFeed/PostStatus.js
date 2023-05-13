import React, { useMemo, useState } from "react";
import Post_statusmod from "./PostStatus.module.css";
import Post_statusmain from "./PostStatus.module.css";
import Openpostmodal from "./PostStatus.module.css";
import SnapModal from "./SnapModal";
import { postStatus, getStatus } from "../../api/FirestoreAPI";
import PostCard from "./PostCard";
import { getCurrentTimeStamp } from "../../Helpers/useMoment";
import { updatePost } from "../../api/FirestoreAPI";
import { uploadPostImage } from "../../api/ImageUpload";

function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
  };

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

  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

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
        isEdit={isEdit}
        updateStatus={updateStatus}
        uploadPostImage={uploadPostImage}
        postImage={postImage}
        setPostImage={setPostImage}
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
      />

      <div>
        {allStatuses.map((posts) => {
          return (
            <>
              <PostCard posts={posts} getEditData={getEditData} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PostStatus;
