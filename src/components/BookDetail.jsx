// components/BookDetail.jsx
import React from 'react';
import { GENRE_COLORS } from '../utils/constants';
import '../styles/Modal.css';
import '../styles/BookDetail.css';

const BookDetail = ({ book, onClose, onEdit }) => {
  const genreStyle = GENRE_COLORS[book.genre] || GENRE_COLORS['Other'];

  return (
    <>
      {/* Colored header */}
      <div
        className="detail__header"
        style={{ borderBottom: `3px solid ${genreStyle.color}` }}
      >
        <div className="detail__header-content">
          <span
            className="book-card__genre"
            style={{ background: genreStyle.bg, color: genreStyle.color, marginBottom: '8px', display: 'inline-block' }}
          >
            {book.genre}
          </span>
          <h2 className="detail__title">{book.title}</h2>
          <p className="detail__author">by <span>{book.author}</span></p>
        </div>
        <button className="modal__close" onClick={onClose}>✕</button>
      </div>

      <div className="modal__body">
        <div className="detail__rows">
          <div className="detail__row">
            <span className="detail__key">Year</span>
            <span className="detail__val">📅 {book.year}</span>
          </div>
          <div className="detail__row">
            <span className="detail__key">Genre</span>
            <span className="detail__val">🏷️ {book.genre}</span>
          </div>
          <div className="detail__row">
            <span className="detail__key">Author</span>
            <span className="detail__val">{book.author}</span>
          </div>
          {book.description && (
            <div className="detail__row detail__row--desc">
              <span className="detail__key">Synopsis</span>
              <span className="detail__val detail__val--desc">{book.description}</span>
            </div>
          )}
        </div>

        <div className="modal__footer">
          <button className="btn btn--ghost" onClick={onClose}>Close</button>
          <button className="btn btn--primary" onClick={onEdit}>✏️ Edit Book</button>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
