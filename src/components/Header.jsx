// components/Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = ({ onAddBook }) => {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon">📖</div>
        <div>
          <h1 className="header__title">BookMedia</h1>
          <p className="header__subtitle">Book Management System</p>
        </div>
      </div>
      <button className="btn btn--primary" onClick={onAddBook}>
        <span>＋</span> Add Book
      </button>
    </header>
  );
};

export default Header;
