// components/BookListItem.jsx
import React from 'react';
import { GENRE_COLORS } from '../utils/constants';
import '../styles/BookListItem.css';

const BookListItem = ({ book, onView, onEdit, onDelete, index }) => {
  const genreStyle = GENRE_COLORS[book.genre] || GENRE_COLORS['Other'];

  return (
    <article
      className="book-list-item"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Left accent bar */}
      <div
        className="book-list-item__bar"
        style={{ background: `linear-gradient(to bottom, ${genreStyle.color}, ${genreStyle.color}44)` }}
      />

      {/* Book info */}
      <div className="book-list-item__info">
        <h3 className="book-list-item__title">{book.title}</h3>
        <p className="book-list-item__sub">{book.author} · {book.year}</p>
      </div>

      {/* Genre badge */}
      <span
        className="book-list-item__genre"
        style={{ background: genreStyle.bg, color: genreStyle.color }}
      >
        {book.genre}
      </span>

      {/* Actions */}
      <div className="book-list-item__actions">
        <button className="btn btn--icon btn--ghost" onClick={() => onView(book)} title="View">👁</button>
        <button className="btn btn--icon btn--ghost" onClick={() => onEdit(book)} title="Edit">✏️</button>
        <button className="btn btn--icon btn--danger" onClick={() => onDelete(book)} title="Delete">🗑</button>
      </div>
    </article>
  );
};

export default BookListItem;
