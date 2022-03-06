"use strict";
// All Routers Exports
/* 새로운 routes 인덱스가 생길 때마다 리팩토링해서 함께 관리! 

ex)
const newRouter = require('/new');
router.use('/new', newRouter); */

const express = require('express');
const app = express();
const router = express.Router();

// Todo Router
const todoRouter = require('./todo.js');

// Refactoring
router.use('/todo', todoRouter); // http://localhost:3000/todo 로 라우팅

module.exports = router;