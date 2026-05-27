// components/Toast.jsx
import React from 'react';
import '../styles/Toast.css';

const ICONS = { success: '✅', error: '❌', info: 'ℹ️' };

const Toast = ({ toasts, onRemove }) => {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`toast toast--${t.type}`}
          onClick={() => onRemove(t.id)}
          role="alert"
        >
          <span className="toast__icon">{ICONS[t.type] || 'ℹ️'}</span>
          <span className="toast__msg">{t.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
