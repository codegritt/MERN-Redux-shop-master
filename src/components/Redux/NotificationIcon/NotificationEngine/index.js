import React, { useRef, useEffect, useState } from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationWindow from "./NotificationWindow";

const NotificationEngine = () => {
  const NotewrapperRef = useRef(null);
  NoteuseOutsideAlerter(NotewrapperRef);
  const [notification, setNotification] = useState(false);

  function NoteuseOutsideAlerter(ref) {
    useEffect(() => {
      function NotehandleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNotification(false);
        }
      }
      document.addEventListener("mousedown", NotehandleClickOutside);
      return () => {
        document.removeEventListener("mousedown", NotehandleClickOutside);
      };
    }, [ref]);
  }
  return (
    <>
      <div>
        <div ref={NotewrapperRef}>
          <NotificationWindow visible={notification} />
          <FontAwesomeIcon
            icon={faBell}
            onClick={() => setNotification(true)}
            style={{
              color: "white",
              position: "fixed",
              bottom: "635px",
              right: "50px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NotificationEngine;
