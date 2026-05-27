// components/ConfirmDelete.jsx
import React from 'react';
import '../styles/Modal.css';

const ConfirmDelete = ({ book, onConfirm, onClose, loading }) => {
  return (
    <>
      <div className="modal__header">
        <h2 className="modal__title">Delete Book</h2>
        <button className="modal__close" onClick={onClose} disabled={loading}>✕</button>
      </div>
      <div className="modal__body">
        <div className="confirm">
          <div className="confirm__icon">🗑️</div>
          <h3 className="confirm__book-title">"{book.title}"</h3>
          <p className="confirm__message">
            This action <strong>cannot be undone</strong>. The book will be permanently removed from your collection.
          </p>
          <div className="modal__footer confirm__footer">
            <button className="btn btn--ghost" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button className="btn btn--danger-solid" onClick={onConfirm} disabled={loading}>
              {loading
                ? <><span className="spinner" /> Deleting…</>
                : '🗑 Yes, Delete'
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
