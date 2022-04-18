const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllCategory, createCategory, updateCategory, deleteCategory } = require('./controller');


router.get('/category', auth, getAllCategory);
router.post('/category/create', auth, createCategory);
router.put('/category/update/:id', auth, updateCategory);
router.delete('/category/delete/:id', auth, deleteCategory);

module.exports = router;
