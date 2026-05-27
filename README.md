 BookMedia — Book Management System

A full-featured React Book Management System built for a developer evaluation assignment.

 Getting Started

bash
npm install
npm start



---
Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky top nav with Add Book button
│   ├── StatsBar.jsx        # Books / Authors / Genres / Avg Year stats
│   ├── FilterBar.jsx       # Search + genre filter + sort + view toggle
│   ├── BookList.jsx        # Renders grid or list based on view prop
│   ├── BookCard.jsx        # Grid view card
│   ├── BookListItem.jsx    # List view row
│   ├── BookForm.jsx        # Add / Edit form with validation
│   ├── BookDetail.jsx      # Read-only detail modal
│   ├── ConfirmDelete.jsx   # Delete confirmation dialog
│   ├── Modal.jsx           # Generic modal wrapper (ESC to close, backdrop click)
│   ├── Toast.jsx           # Notification toasts
│   ├── SkeletonGrid.jsx    # Loading skeleton cards
│   ├── EmptyState.jsx      # Empty / no-results state
│   └── ErrorBanner.jsx     # API error with retry button
│
├── hooks/
│   ├── useBooks.js         # All CRUD state + API calls
│   ├── useFilter.js        # .filter() / .sort() logic — search, genre, sort
│   └── useToast.js         # Toast notification queue
│
├── services/
│   └── bookService.js      # Mock REST API (localStorage, swap for real fetch)
│
├── utils/
│   ├── constants.js        # GENRES, SORT_OPTIONS, GENRE_COLORS
│   └── validate.js         # validateBook() — pure validation function
│
├── styles/
│   ├── global.css          # CSS vars, base styles, shared .btn / .form-* classes
│   ├── Header.css
│   ├── StatsBar.css
│   ├── FilterBar.css
│   ├── BookList.css
│   ├── BookCard.css
│   ├── BookListItem.css
│   ├── Modal.css
│   ├── BookDetail.css
│   ├── Toast.css
│   ├── Skeleton.css
│   ├── EmptyState.css
│   └── ErrorBanner.css
│
├── App.jsx                 # Root — wires hooks + components, manages modal state
└── index.js                # Entry point
```

---

## ✅ Features Implemented

| Feature | Details |
|---|---|
| **View books** | Grid & List view toggle |
| **Add book** | Form with validation (title, author, genre, year, description) |
| **Edit book** | Pre-filled form, updates in place |
| **Delete book** | Confirmation dialog before deletion |
| **Search** | Real-time filter by title or author using `.filter()` |
| **Genre filter** | Dropdown filter using `.filter()` |
| **Sort** | Newest / Oldest / Title A-Z / Author A-Z using `.sort()` |
| **Loading states** | Skeleton cards on fetch, spinners on form submit |
| **Error handling** | Error banner with retry, inline form validation |
| **Toast notifications** | Success / error / info messages |
| **Stats bar** | Total books, authors, genres, avg year |
| **Detail view** | Full book info modal with edit shortcut |
| **Persistence** | localStorage via mock API service |

---


-
