import { Modal } from "antd";
import React from "react";
import Modalpos from "./SnapModal.module.css";

const VideoModal = ({ videomodalOpen, setvideoModalOpen }) => {
  return (
    <>
      <Modal
        className={Modalpos.modalpos}
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={videomodalOpen}
        onOk={() => setvideoModalOpen(false)}
        onCancel={() => setvideoModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default VideoModal;
