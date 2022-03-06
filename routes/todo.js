"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/todo.js');

// Main
router.get('/', ctrl.output.main); // http://localhost:3000/todo/

// Write
router.post('/write', ctrl.output.write); // http://localhost:3000/todo/write

// Edit
router.get('/edit/:id', ctrl.output.edit);

// Update
router.post('/update/:id', ctrl.output.update);

// Remove
router.get('/remove/:id', ctrl.output.remove);

module.exports = router;