// components/ErrorBanner.jsx
import React from 'react';
import '../styles/ErrorBanner.css';

const ErrorBanner = ({ message, onRetry }) => (
  <div className="error-banner" role="alert">
    <span className="error-banner__icon">⚠️</span>
    <span className="error-banner__msg">Failed to load books: {message}</span>
    <button className="btn btn--ghost btn--sm" onClick={onRetry}>🔄 Retry</button>
  </div>
);

export default ErrorBanner;
