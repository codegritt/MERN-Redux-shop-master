import React from "react";
import { Button, Modal } from "antd";
import Modalpos from "./SnapModal.module.css";

const SnapModal = ({
  modalOpen,
  setModalOpen,
  setStatus,
  sendStatus,
  status,
}) => {
  return (
    <>
      <Modal
        className={Modalpos.modalpos}
        title="Create a post"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        footer={[
          <Button
            style={{ backgroundColor: "#c6003d" }}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <input
          style={{
            border: "none !important",
            backgroundColor: "white",
            outline: "none",
            color: "black",
            fontSize: "14px",
            width: "100%",
            resize: "none",
            height: "10%",
            position: "relative",
            top: "8px",
            textDecoration: "none !important",
            boxShadow: "inset 0 0 0 0 transparent",
          }}
          className="form-control"
          placeholder="What do you want to talk about?"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        />
      </Modal>
    </>
  );
};

export default SnapModal;
