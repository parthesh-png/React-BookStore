





import axios from "axios";

const API =
"https://6a16cf891b90031f81b18284.mockapi.io/books";

export const fetchBooks = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addBook = async (book) => {
  const res = await axios.post(API, book);
  return res.data;
};

export const updateBook = async (id, book) => {
  const res = await axios.put(
    `${API}/${id}`,
    book
  );
  return res.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`${API}/${id}`);
};





// // services/bookService.js
// // Simulates a real REST API with network delay + localStorage persistence.
// // To connect a real backend, just replace the method bodies with fetch() calls.

// const STORAGE_KEY = 'bms_books';
// const DELAY = () => 300 + Math.random() * 200; // simulate network latency

// const SEED_DATA = [
//   { id: '1', title: 'The Great Gatsby',       author: 'F. Scott Fitzgerald', genre: 'Fiction',   year: '1925', description: 'A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan, set in the Jazz Age.' },
//   { id: '2', title: 'Gone Girl',               author: 'Gillian Flynn',        genre: 'Thriller',  year: '2012', description: 'A dark psychological thriller about a marriage gone terribly wrong on a wedding anniversary.' },
//   { id: '3', title: 'Dune',                    author: 'Frank Herbert',         genre: 'Sci-Fi',    year: '1965', description: 'A sweeping science fiction epic set in the distant future amidst a feudal interstellar society.' },
//   { id: '4', title: 'Pride and Prejudice',     author: 'Jane Austen',          genre: 'Romance',   year: '1813', description: 'A romantic novel of manners following the Bennet family and the charming Mr. Darcy.' },
//   { id: '5', title: 'Sapiens',                 author: 'Yuval Noah Harari',    genre: 'History',   year: '2011', description: 'A brief history of humankind — from stone age to silicon age.' },
//   { id: '6', title: 'The Hound of Baskervilles', author: 'Arthur Conan Doyle', genre: 'Mystery',   year: '1902', description: 'Sherlock Holmes investigates the legend of a supernatural hound threatening the Baskerville family.' },
//   { id: '7', title: 'Atomic Habits',           author: 'James Clear',          genre: 'Self-Help', year: '2018', description: 'A proven framework for improving every day by focusing on tiny changes that deliver remarkable results.' },
//   { id: '8', title: 'The Hobbit',              author: 'J.R.R. Tolkien',       genre: 'Fantasy',   year: '1937', description: 'Bilbo Baggins is swept into an epic quest to reclaim the dwarf kingdom of Erebor.' },
  
// ];

// // ── Internal helpers ──────────────────────────────────────────────────────────

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const getAll = () => {
//   try {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     return stored ? JSON.parse(stored) : SEED_DATA;
//   } catch {
//     return SEED_DATA;
//   }
// };

// const saveAll = (books) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
// };

// const generateId = () =>
//   Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// // ── Public API ────────────────────────────────────────────────────────────────

// /**
//  * GET /books — fetch all books
//  */
// export const fetchBooks = async () => {
//   await delay(DELAY());
//   return getAll();
// };

// /**
//  * POST /books — add a new book
//  */
// export const addBook = async (bookData) => {
//   await delay(DELAY());
//   const books = getAll();
//   const newBook = { ...bookData, id: generateId() };
//   const updated = [newBook, ...books];
//   saveAll(updated);
//   return newBook;
// };

// /**
//  * PUT /books/:id — update an existing book
//  */
// export const updateBook = async (id, bookData) => {
//   await delay(DELAY());
//   const books = getAll();
//   const index = books.findIndex((b) => b.id === id);
//   if (index === -1) throw new Error(`Book with id "${id}" not found`);
//   books[index] = { ...books[index], ...bookData };
//   saveAll(books);
//   return books[index];
// };

// /**
//  * DELETE /books/:id — delete a book
//  */
// export const deleteBook = async (id) => {
//   await delay(DELAY());
//   const books = getAll();
//   const filtered = books.filter((b) => b.id !== id);
//   if (filtered.length === books.length) throw new Error(`Book with id "${id}" not found`);
//   saveAll(filtered);
//   return { success: true, id };
// };
