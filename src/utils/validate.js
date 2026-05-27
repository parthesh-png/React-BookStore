// utils/validate.js

/**
 * Validates book form data.
 * Returns an object of { field: errorMessage }.
 * Empty object = valid.
 */
export const validateBook = (data) => {
  const errors = {};

  if (!data.title?.trim()) {
    errors.title = 'Title is required';
  } else if (data.title.trim().length < 2) {
    errors.title = 'Title must be at least 2 characters';
  }

  if (!data.author?.trim()) {
    errors.author = 'Author name is required';
  } else if (data.author.trim().length < 2) {
    errors.author = 'Author must be at least 2 characters';
  }

  if (!data.genre) {
    errors.genre = 'Please select a genre';
  }

  if (!data.year?.trim()) {
    errors.year = 'Publication year is required';
  } else if (!/^\d{4}$/.test(data.year.trim())) {
    errors.year = 'Enter a valid 4-digit year';
  } else {
    const yr = parseInt(data.year, 10);
    if (yr < 1000 || yr > new Date().getFullYear() + 2) {
      errors.year = `Year must be between 1000 and ${new Date().getFullYear() + 2}`;
    }
  }

  return errors;
};
