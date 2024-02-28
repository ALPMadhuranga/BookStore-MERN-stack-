import express from 'express';  // import express
import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from '../controllers/bookController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// Route for Save a new Book
router.post('/',protect, createBook);

// Route for Get All Books from database
router.get('/',protect, getAllBooks);

// Route for Get One Book from database by id
router.get('/:id',protect, getOneBook);

// Route for Update a Book
router.put('/:id',protect, updateBook);

// Route for Delete a book
router.delete('/:id',protect, deleteBook);

export default router;