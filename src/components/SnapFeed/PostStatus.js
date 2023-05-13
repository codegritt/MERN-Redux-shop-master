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
import SnapLogo from "../../assets/logos-110.webp";
import SnapLogomod from "./PostStatus.module.css";
import { Link } from "react-router-dom";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import PostcreateOptions from "./PostStatus.module.css";
import PostcreateOptionsp from "./PostStatus.module.css";
import Photoicon from "./PostStatus.module.css";

function PostStatus(posts) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  const sendStatus = async () => {
    let object = {
      name: "Gokul",
      userEmail: "gokul@gmail.com",
      userName: "gokul",
      userID: "123456",
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      postImage: postImage,
    };

    await postStatus(object);
    await setModalOpen(false);
    setIsEdit(false);
    await setStatus("");
  };

  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className={Post_statusmain.post_statusmain}>
      <div className={Post_statusmod.post_statusmod}>
        <Link to="/">
          <img
            className={SnapLogomod.snapLogomod}
            src={SnapLogo}
            alt="SnapLogo"
          />
        </Link>

        <button
          className={Openpostmodal.openpostmodal}
          onClick={() => setModalOpen(true)}
        >
          Start a Post
        </button>

        <div className={PostcreateOptions.postcreateOptions}>
          <div className={PostcreateOptionsp.postcreateOptionsp}>
            <FontAwesomeIcon
              className={Photoicon.photoicon}
              icon={faCameraRetro}
            />
            <p>Photo</p>
          </div>
          <div className={PostcreateOptionsp.postcreateOptionsp}>
            <FontAwesomeIcon className={Photoicon.photoicon} icon={faVideo} />
            <p>Video</p>
          </div>
          <div className={PostcreateOptionsp.postcreateOptionsp}>
            <FontAwesomeIcon
              className={Photoicon.photoicon}
              icon={faCalendarDays}
            />
            <p>Event</p>
          </div>
          <div className={PostcreateOptionsp.postcreateOptionsp}>
            <FontAwesomeIcon
              className={Photoicon.photoicon}
              icon={faNewspaper}
            />
            <p>Article</p>
          </div>
        </div>
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
