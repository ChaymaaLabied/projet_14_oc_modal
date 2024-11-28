/**
 * Composant Modal qui affiche une boîte de dialogue modale.
 * @param {boolean} isOpen - Indique si la modal est ouverte.
 * @param {function} onClose - Fonction pour fermer la modal.
 * @param {ReactNode} children - Contenu de la modal.
 */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  // Ferme la modal si l'élément de sortie n'est pas un enfant de la modal
  const handleBlur = (e) => {
    if (!modalRef.current.contains(e.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onBlur={handleBlur} role="presentation">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        ref={modalRef}
        tabIndex={-1}
      >
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
