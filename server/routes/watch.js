const express = require('express');
const router = express.Router();
const userController = require('../../watchController');

// view, & create for admin-site

router.get('/', userController.view);
router.get('/admin', userController.form);
router.post('/admin', userController.create);

module.exports = router;