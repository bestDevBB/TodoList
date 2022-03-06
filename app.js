"use strict";

const express = require('express');
const dotenv = require('dotenv');
const { sequelize }  = require('./models/index.js');
// const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// DB Connection
sequelize.sync({ force: false })
// DB가 초기화 될 때 DB에 필요한 테이블을 생성하는 함수
    .then(() => {
        console.log("데이터베이스 연결 성공!");
    })
    .catch((err) => {
        console.log("연결 실패!", err);
    });

// app setting - view, static files, body-parser
app.set("views engine", "ejs");
app.set("views", "./views");

app.use(express.static(`${__dirname}/public`)) 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router setting
app.use(router);

// 서버 실행 - bin 폴더 만들어서 따로 분리할 것!
app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 실행 중...`);
});