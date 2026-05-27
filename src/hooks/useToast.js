// hooks/useToast.js
import { useState, useCallback } from 'react';

/**
 * Custom hook — manages toast notification queue.
 * Usage: const { toasts, toast } = useToast();
 *        toast('Book added!', 'success');
 */
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, toast, removeToast };
};

export default useToast;
