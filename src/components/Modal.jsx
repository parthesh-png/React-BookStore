// components/Modal.jsx
import React, { useEffect } from 'react';
import '../styles/Modal.css';

const Modal = ({ children, onClose, preventClose = false }) => {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && !preventClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, preventClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !preventClose) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
};

export default Modal;
