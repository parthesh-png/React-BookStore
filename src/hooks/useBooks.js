// hooks/useBooks.js
import { useState, useEffect, useCallback } from 'react';
import * as bookService from '../services/bookService';

/**
 * Custom hook — manages all books state and exposes CRUD operations.
 * Components stay clean: they only call hook methods, never touch the API directly.
 */
const useBooks = () => {
  const [books, setBooks]               = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  // ── FETCH ──────────────────────────────────────────────────────────────────
  const loadBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await bookService.fetchBooks();
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Failed to load books');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  // ── ADD ────────────────────────────────────────────────────────────────────
  const addBook = useCallback(async (bookData) => {
    setActionLoading(true);
    try {
      const newBook = await bookService.addBook(bookData);
      setBooks((prev) => [newBook, ...prev]); // optimistic: prepend
      return { success: true, book: newBook };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setActionLoading(false);
    }
  }, []);

  // ── UPDATE ─────────────────────────────────────────────────────────────────
  const updateBook = useCallback(async (id, bookData) => {
    setActionLoading(true);
    try {
      const updated = await bookService.updateBook(id, bookData);
      setBooks((prev) => prev.map((b) => (b.id === id ? updated : b)));
      return { success: true, book: updated };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setActionLoading(false);
    }
  }, []);

  // ── DELETE ─────────────────────────────────────────────────────────────────
  const deleteBook = useCallback(async (id) => {
    setActionLoading(true);
    try {
      await bookService.deleteBook(id);
      setBooks((prev) => prev.filter((b) => b.id !== id)); // ← .filter() removes deleted book
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setActionLoading(false);
    }
  }, []);

  return {
    books,
    loading,
    error,
    actionLoading,
    loadBooks,
    addBook,
    updateBook,
    deleteBook,
  };
};

export default useBooks;
