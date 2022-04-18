const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllBooks } = require('./controller');


router.get('/books', auth, getAllBooks);
// router.post('/category/create', auth, createCategory);
// router.put('/category/update/:id', auth, updateCategory);
// router.delete('/category/delete/:id', auth, deleteCategory);

module.exports = router;
