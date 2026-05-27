// utils/constants.js

export const GENRES = [
  'Fiction',
  'Mystery',
  'Sci-Fi',
  'Romance',
  'History',
  'Biography',
  'Self-Help',
  'Thriller',
  'Fantasy',
  'Other',
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Year: Newest First' },
  { value: 'oldest', label: 'Year: Oldest First' },
  { value: 'title',  label: 'Title: A → Z' },
  { value: 'author', label: 'Author: A → Z' },
];

export const GENRE_COLORS = {
  Fiction:    { bg: '#6b9fe020', color: '#6b9fe0' },
  Mystery:    { bg: '#9b6be020', color: '#b07de0' },
  'Sci-Fi':   { bg: '#6bbf8e20', color: '#6bbf8e' },
  Romance:    { bg: '#e06b9b20', color: '#e07db0' },
  History:    { bg: '#e8c47a20', color: '#e8c47a' },
  Biography:  { bg: '#e0906b20', color: '#e0a07a' },
  'Self-Help':{ bg: '#6bb8e020', color: '#7ac8e8' },
  Thriller:   { bg: '#e06b6b20', color: '#e06b6b' },
  Fantasy:    { bg: '#c9b46b20', color: '#d4c47a' },
  Other:      { bg: '#33374820', color: '#8b91a8' },
};
