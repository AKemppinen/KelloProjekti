const express = require('express');
const router = express.Router();
const watchController = require('../../watchController');

// router for view, form & create for admin-site

router.get('/', watchController.view);
router.get('/admin', watchController.form);
router.post('/admin', watchController.create);

module.exports = router;