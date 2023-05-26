import { Modal } from "antd";
import React from "react";
import Modalpos from "./SnapModal.module.css";

const PhotoModal = ({ photomodalOpen, setphotoModalOpen }) => {
  return (
    <>
      <Modal
        className={Modalpos.modalpos}
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={photomodalOpen}
        onOk={() => setphotoModalOpen(false)}
        onCancel={() => setphotoModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default PhotoModal;
