const express = require('express');
const router = express.Router();
const auth = require('../services/AuthService');
const controller = require('../controllers/FilmesController');

router.post('/', controller.post);
router.get('/', auth.authorize, controller.get);

module.exports = router;