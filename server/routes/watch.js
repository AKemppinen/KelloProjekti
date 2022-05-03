const express = require('express');
const router = express.Router();
const userController = require('../../userController');

// create, find, update delete

router.get('/', userController.view);
router.post('/', userController.find);
router.get('/admin', userController.form);
router.post('/admin', userController.create);
router.get('/editwatch/:id', userController.edit);
router.post('/editwatch/:id', userController.update);
router.get('/viewwatch/:id', userController.viewall);
router.get('/:id', userController.delete);

module.exports = router;