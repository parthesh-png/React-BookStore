// components/FilterBar.jsx
import React, { useRef } from 'react';
import { GENRES, SORT_OPTIONS } from '../utils/constants';
import '../styles/FilterBar.css';

const FilterBar = ({
  search, onSearchChange,
  genreFilter, onGenreChange,
  sortBy, onSortChange,
  view, onViewChange,
  totalBooks, filteredCount,
  onClearFilters, activeFilterCount,
}) => {
  const searchRef = useRef(null);

  const handleClearSearch = () => {
    onSearchChange('');
    searchRef.current?.focus();
  };

  return (
    <div className="filter-bar">
      {/* Row 1: Search + Genre + Sort */}
      <div className="filter-bar__controls">

        {/* Search */}
        <div className="filter-bar__search-wrap">
          <span className="filter-bar__search-icon">🔍</span>
          <input
            ref={searchRef}
            type="text"
            className="filter-bar__search"
            placeholder="Search by title or author…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {search && (
            <button
              className="filter-bar__search-clear"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Genre Filter */}
        <select
          className="filter-bar__select"
          value={genreFilter}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="">All Genres</option>
          {GENRES.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="filter-bar__select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        {/* View toggle */}
        <div className="filter-bar__view-toggle">
          <button
            className={`filter-bar__view-btn${view === 'grid' ? ' active' : ''}`}
            onClick={() => onViewChange('grid')}
            title="Grid view"
          >
            ⊞
          </button>
          <button
            className={`filter-bar__view-btn${view === 'list' ? ' active' : ''}`}
            onClick={() => onViewChange('list')}
            title="List view"
          >
            ☰
          </button>
        </div>

        {/* Clear filters */}
        {activeFilterCount > 0 && (
          <button className="btn btn--ghost btn--sm" onClick={onClearFilters}>
            ✕ Clear ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Row 2: Results count */}
      <div className="filter-bar__meta">
        <span className="filter-bar__count">
          Showing <strong>{filteredCount}</strong> of <strong>{totalBooks}</strong> books
          {activeFilterCount > 0 && <span className="filter-bar__active-badge"> • {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active</span>}
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
