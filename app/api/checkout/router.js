const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { checkout } = require('./controller');


router.post('/checkouts', auth, checkout);
// router.post('/category/create', auth, createCategory);
// router.put('/category/update/:id', auth, updateCategory);
// router.delete('/category/delete/:id', auth, deleteCategory);

module.exports = router;
