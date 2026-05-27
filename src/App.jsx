// App.jsx
import React, { useState } from 'react';
import Header        from './components/Header';
import StatsBar      from './components/StatsBar';
import FilterBar     from './components/FilterBar';
import BookList      from './components/BookList';
import Modal         from './components/Modal';
import BookForm      from './components/BookForm';
import BookDetail    from './components/BookDetail';
import ConfirmDelete from './components/ConfirmDelete';
import Toast         from './components/Toast';
import ErrorBanner   from './components/ErrorBanner';

import useBooks  from './hooks/useBooks';
import useFilter from './hooks/useFilter';
import useToast  from './hooks/useToast';

// Modal types
const MODAL = {
  NONE:   null,
  ADD:    'add',
  EDIT:   'edit',
  DELETE: 'delete',
  DETAIL: 'detail',
};

const App = () => {
  const { books, loading, error, actionLoading, loadBooks, addBook, updateBook, deleteBook } = useBooks();
  const { filteredBooks, search, setSearch, genreFilter, setGenreFilter, sortBy, setSortBy, clearFilters, activeFilterCount } = useFilter(books);
  const { toasts, toast, removeToast } = useToast();

  const [modal, setModal]       = useState(MODAL.NONE);
  const [selected, setSelected] = useState(null);
  const [view, setView]         = useState('grid');

  // ── Open modals ────────────────────────────────────────────────────────────
  const openAdd    = ()      => { setSelected(null); setModal(MODAL.ADD); };
  const openEdit   = (book) => { setSelected(book);  setModal(MODAL.EDIT); };
  const openDelete = (book) => { setSelected(book);  setModal(MODAL.DELETE); };
  const openDetail = (book) => { setSelected(book);  setModal(MODAL.DETAIL); };
  const closeModal = ()      => { setModal(MODAL.NONE); setSelected(null); };

  // From detail → edit without closing
  const detailToEdit = () => setModal(MODAL.EDIT);

  // ── CRUD handlers ──────────────────────────────────────────────────────────
  const handleAdd = async (formData) => {
    const res = await addBook(formData);
    if (res.success) {
      toast('Book added successfully! 🎉', 'success');
      closeModal();
    } else {
      toast(`Error: ${res.error}`, 'error');
    }
  };

  const handleUpdate = async (formData) => {
    const res = await updateBook(selected.id, formData);
    if (res.success) {
      toast('Book updated! ✅', 'success');
      closeModal();
    } else {
      toast(`Error: ${res.error}`, 'error');
    }
  };

  const handleDelete = async () => {
    const res = await deleteBook(selected.id);
    if (res.success) {
      toast('Book deleted.', 'info');
      closeModal();
    } else {
      toast(`Error: ${res.error}`, 'error');
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      <Header onAddBook={openAdd} />

      <main className="main">
        {/* Stats row */}
        {!loading && !error && <StatsBar books={books} />}

        {/* Error */}
        {error && <ErrorBanner message={error} onRetry={loadBooks} />}

        {/* Filter / search bar */}
        {!error && (
          <FilterBar
            search={search}           onSearchChange={setSearch}
            genreFilter={genreFilter} onGenreChange={setGenreFilter}
            sortBy={sortBy}           onSortChange={setSortBy}
            view={view}               onViewChange={setView}
            totalBooks={books.length}
            filteredCount={filteredBooks.length}
            onClearFilters={clearFilters}
            activeFilterCount={activeFilterCount}
          />
        )}

        {/* Book list / grid */}
        {!error && (
          <BookList
            books={filteredBooks}
            loading={loading}
            view={view}
            hasFilters={activeFilterCount > 0 || !!search}
            onView={openDetail}
            onEdit={openEdit}
            onDelete={openDelete}
            onClearFilters={clearFilters}
            onAddBook={openAdd}
          />
        )}
      </main>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}

      {modal === MODAL.ADD && (
        <Modal onClose={closeModal} preventClose={actionLoading}>
          <BookForm
            onSubmit={handleAdd}
            onClose={closeModal}
            loading={actionLoading}
          />
        </Modal>
      )}

      {modal === MODAL.EDIT && selected && (
        <Modal onClose={closeModal} preventClose={actionLoading}>
          <BookForm
            initialData={selected}
            onSubmit={handleUpdate}
            onClose={closeModal}
            loading={actionLoading}
          />
        </Modal>
      )}

      {modal === MODAL.DELETE && selected && (
        <Modal onClose={closeModal} preventClose={actionLoading}>
          <ConfirmDelete
            book={selected}
            onConfirm={handleDelete}
            onClose={closeModal}
            loading={actionLoading}
          />
        </Modal>
      )}

      {modal === MODAL.DETAIL && selected && (
        <Modal onClose={closeModal}>
          <BookDetail
            book={selected}
            onClose={closeModal}
            onEdit={detailToEdit}
          />
        </Modal>
      )}

      {/* Toast notifications */}
      <Toast toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

export default App;
