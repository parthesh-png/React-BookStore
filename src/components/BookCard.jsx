// components/BookCard.jsx
import React from 'react';
import { GENRE_COLORS } from '../utils/constants';
import '../styles/BookCard.css';

const BookCard = ({ book, onView, onEdit, onDelete }) => {
  const genreStyle = GENRE_COLORS[book.genre] || GENRE_COLORS['Other'];

  return (
    <article className="book-card">
     

      <div className="book-card__body">
        
        <span
          className="book-card__genre"
          style={{ background: genreStyle.bg, color: genreStyle.color }}
        >
          {book.genre}
        </span>

        
        <h3 className="book-card__title" title={book.title}>{book.title}</h3>
        <p className="book-card__author">by <span>{book.author}</span></p>

        {/* Description preview */}
        {book.description && (
          <p className="book-card__desc">{book.description}</p>
        )}

        {/* Footer: year + action buttons */}
        <div className="book-card__footer">
          <span className="book-card__year">📅 {book.year}</span>
          <div className="book-card__actions">
            <button
              className="btn btn--icon btn--ghost"
              onClick={() => onView(book)}
              title="View details"
            >👁</button>
            <button
              className="btn btn--icon btn--ghost"
              onClick={() => onEdit(book)}
              title="Edit book"
            >✏️</button>
            <button
              className="btn btn--icon btn--danger"
              onClick={() => onDelete(book)}
              title="Delete book"
            >🗑</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
