const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { uploadsImage } = require('./controller');
const upload = require('../../middlewares/multer');

router.post('/uploads', auth, upload.single('image'), uploadsImage);

module.exports = router;
