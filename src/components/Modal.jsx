import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
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
          {children}
        </div>
      </div>
    );
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
export default Modal;
