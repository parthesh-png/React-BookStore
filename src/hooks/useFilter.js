// hooks/useFilter.js
import { useState, useMemo } from 'react';


const useFilter = (books) => {
  const [search, setSearch]           = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [sortBy, setSortBy]           = useState('newest');

  const filteredBooks = useMemo(() => {
    // ── Step 1: Search filter ─────────────────────────────────────────────
    // .filter() by title OR author (case-insensitive)
    const query = search.trim().toLowerCase();
    let result = query
      ? books.filter(
          (book) =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        )
      : [...books];

    // ── Step 2: Genre filter ──────────────────────────────────────────────
    // .filter() keeps only books matching selected genre
    if (genreFilter) {
      result = result.filter((book) => book.genre === genreFilter);
    }

    // ── Step 3: Sort ──────────────────────────────────────────────────────
    // .sort() mutates a copy — we already have a new array from filter above
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
        break;
      case 'oldest':
        result.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        result.sort((a, b) => a.author.localeCompare(b.author));
        break;
      default:
        break;
    }

    return result;
  }, [books, search, genreFilter, sortBy]);

  const clearFilters = () => {
    setSearch('');
    setGenreFilter('');
    setSortBy('newest');
  };

  const activeFilterCount = (search ? 1 : 0) + (genreFilter ? 1 : 0);

  return {
    filteredBooks,
    search,
    setSearch,
    genreFilter,
    setGenreFilter,
    sortBy,
    setSortBy,
    clearFilters,
    activeFilterCount,
  };
};

export default useFilter;
