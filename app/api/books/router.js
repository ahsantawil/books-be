const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllBooks, createBooks, updateBooks, deleteBooks } = require('./controller');


router.get('/books', auth, getAllBooks);
router.post('/books/create', auth, createBooks);
router.put('/books/update/:id', auth, updateBooks);
router.delete('/books/delete/:id', auth, deleteBooks);

module.exports = router;
