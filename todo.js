"use strict";

// Model
const { TodoTask } = require('../models/index.js');

// KST setting (한국 표준시)
let moment = require('moment-timezone');
moment.tz.setDefault('Asia/Seoul'); // Defailt를 한국 표준시로 세팅

// 첫 페이지
exports.get = (req, res) => {
    console.log("---------------!!Todo!!---------------");
    TodoTask.findAll({
        order: [['date', 'DESC']]
    // }, (err, tasks) => {
    //     res.render('todo.ejs', { todoTasks: tasks });
    })
    res.render('todo.ejs');
};

// 편집
exports.write = async(req, res) => {
    try {
        const todoTask = new TodoTask({ // 새로운 TodoTask를 만들어서 todoTask에 저장
            content: req.body.content, // 입력한 부분
            date: moment().format("YYYY-MM-DD HH:mm:ss") // 현재 시간
        })
        await todoTask.save(); // db에 저장
        console.log("==== Success! Save New TodoTask!👍 ====")
        console.table([{id: todoTask._id, content: todoTask.content, date: todoTask.date}]);
        res.redirect('/todo'); // localhost:3000/todo로 귀환
    } catch(err) {
        console.err("==== fail! Save TodoTask ====");
        res.redirect('/todo');
    };
};

// 수정
// exports.update = (req, res) => {
//     const id = req.params.id;
//     TodoTask.
// }