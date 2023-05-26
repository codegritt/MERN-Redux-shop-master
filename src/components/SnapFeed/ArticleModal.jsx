import { Modal } from "antd";
import React from "react";
import Modalpos from "./SnapModal.module.css";

const ArticleModal = ({ articlemodalOpen, setarticleModalOpen }) => {
  return (
    <>
      <Modal
        className={Modalpos.modalpos}
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={articlemodalOpen}
        onOk={() => setarticleModalOpen(false)}
        onCancel={() => setarticleModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default ArticleModal;
