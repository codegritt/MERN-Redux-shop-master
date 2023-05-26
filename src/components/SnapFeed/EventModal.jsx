import { Modal } from "antd";
import React from "react";
import Modalpos from "./SnapModal.module.css";

const EventModal = ({ eventmodalOpen, seteventModalOpen }) => {
  return (
    <>
      <Modal
        className={Modalpos.modalpos}
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={eventmodalOpen}
        onOk={() => seteventModalOpen(false)}
        onCancel={() => seteventModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default EventModal;
