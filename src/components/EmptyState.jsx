// components/EmptyState.jsx
import React from 'react';
import '../styles/EmptyState.css';

const EmptyState = ({ hasFilters, onClearFilters, onAddBook }) => {
  if (hasFilters) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon">🔎</div>
        <h2 className="empty-state__title">No books found</h2>
        <p className="empty-state__sub">Try different search terms or clear the active filters.</p>
        <button className="btn btn--ghost" onClick={onClearFilters}>Clear Filters</button>
      </div>
    );
  }

  return (
    <div className="empty-state">
      <div className="empty-state__icon">📭</div>
      <h2 className="empty-state__title">Your shelf is empty</h2>
      <p className="empty-state__sub">Start building your collection by adding the first book.</p>
      <button className="btn btn--primary" onClick={onAddBook}>＋ Add Your First Book</button>
    </div>
  );
};

export default EmptyState;
