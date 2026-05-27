// components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import BookListItem from './BookListItem';
import SkeletonGrid from './SkeletonGrid';
import EmptyState from './EmptyState';
import '../styles/BookList.css';

const BookList = ({
  books,
  loading,
  view,
  hasFilters,
  onView,
  onEdit,
  onDelete,
  onClearFilters,
  onAddBook,
}) => {
  if (loading) return <SkeletonGrid />;

  if (books.length === 0) {
    return (
      <EmptyState
        hasFilters={hasFilters}
        onClearFilters={onClearFilters}
        onAddBook={onAddBook}
      />
    );
  }

  if (view === 'list') {
    return (
      <div className="book-list">
        {books.map((book, index) => (
          <BookListItem
            key={book.id}
            book={book}
            index={index}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          book={book}
          index={index}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
