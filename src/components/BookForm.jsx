// components/BookForm.jsx
import React, { useState, useEffect } from 'react';
import { GENRES } from '../utils/constants';
import { validateBook } from '../utils/validate';
import '../styles/Modal.css';

const EMPTY_FORM = { title: '', author: '', genre: '', year: '', description: '' };

const BookForm = ({ initialData, onSubmit, onClose, loading }) => {
  const isEdit = !!initialData;
  const [form, setForm]     = useState(initialData || EMPTY_FORM);
  const [errors, setErrors] = useState({});

  // Sync form when initialData changes (e.g. opening edit for different book)
  useEffect(() => {
    setForm(initialData || EMPTY_FORM);
    setErrors({});
  }, [initialData]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear that field's error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateBook(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
  };

  return (
    <>
      <div className="modal__header">
        <div>
          <h2 className="modal__title">{isEdit ? '✏️ Edit Book' : '➕ Add New Book'}</h2>
          <p className="modal__subtitle">
            {isEdit ? 'Update the details below and save.' : 'Fill in the details to add a book.'}
          </p>
        </div>
        <button className="modal__close" onClick={onClose} disabled={loading}>✕</button>
      </div>

      <div className="modal__body">
        <div className="form-grid">

          {/* Title */}
          <div className="form-group form-group--full">
            <label className="form-label">Book Title *</label>
            <input
              className={`form-input${errors.title ? ' form-input--error' : ''}`}
              type="text"
              placeholder="e.g. The Great Gatsby"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
            {errors.title && <span className="form-error">⚠ {errors.title}</span>}
          </div>

          {/* Author */}
          <div className="form-group">
            <label className="form-label">Author *</label>
            <input
              className={`form-input${errors.author ? ' form-input--error' : ''}`}
              type="text"
              placeholder="e.g. F. Scott Fitzgerald"
              value={form.author}
              onChange={(e) => handleChange('author', e.target.value)}
            />
            {errors.author && <span className="form-error">⚠ {errors.author}</span>}
          </div>

          {/* Year */}
          <div className="form-group">
            <label className="form-label">Publication Year *</label>
            <input
              className={`form-input${errors.year ? ' form-input--error' : ''}`}
              type="text"
              placeholder="e.g. 1925"
              maxLength={4}
              value={form.year}
              onChange={(e) => handleChange('year', e.target.value.replace(/\D/g, ''))}
            />
            {errors.year && <span className="form-error">⚠ {errors.year}</span>}
          </div>

          {/* Genre */}
          <div className="form-group form-group--full">
            <label className="form-label">Genre *</label>
            <select
              className={`form-select${errors.genre ? ' form-input--error' : ''}`}
              value={form.genre}
              onChange={(e) => handleChange('genre', e.target.value)}
            >
              <option value="">— Select a genre —</option>
              {GENRES.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.genre && <span className="form-error">⚠ {errors.genre}</span>}
          </div>

          {/* Description */}
          <div className="form-group form-group--full">
            <label className="form-label">
              Description <span className="form-label--optional">(optional)</span>
            </label>
            <textarea
              className="form-textarea"
              placeholder="A brief description of the book…"
              rows={3}
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>

        </div>

        {/* Footer */}
        <div className="modal__footer">
          <button className="btn btn--ghost" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={handleSubmit} disabled={loading}>
            {loading
              ? <><span className="spinner" /> Saving…</>
              : isEdit ? '💾 Update Book' : '➕ Add Book'
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default BookForm;
