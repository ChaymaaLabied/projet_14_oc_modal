
import React, { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, text }) => {
  const modalRef = useRef(null);

  const handleBlur = (e) => {
    // Check if the blur event comes from outside the modal
    if (!modalRef.current.contains(e.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (isOpen)
    return (
      <div className="modal-overlay" onBlur={handleBlur}>
        <div className="modal-content" ref={modalRef} tabIndex={0}>
          <p>{text}</p>
        </div>
      </div>
    );
};




export default Modal;