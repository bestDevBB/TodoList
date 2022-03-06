"use strict";

const { Todotask } = require('../models/index.js');

var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

const output = {
    // 메인, 목록
    main: async (req, res) => {
        const tasks = await Todotask.findAll({
            attributes: ['id', 'content', 'date'],
            order: [['date', 'DESC']]
        });
        res.render('todo.ejs', { todoTasks: tasks });
        // res.send(tasks);
        // 브라우저에서 DB 목록 json 형태로 보여짐. 공부할 때 써먹기!
    },

    // 등록
    write: async (req, res) => {
        const client = req.body;
        if(client.content) {
            Todotask.create({
                content: client.content,
                date: moment().format("YYYY-MM-DD HH:mm:ss")
            })
            .then(result => {
                console.log("데이터 추가 완료!");
                console.table(result.dataValues);
                res.redirect('/todo');
            })
            .catch(err => {
                console.log("데이터 추가 실패!");
            });
        }
    },

    // 편집
    edit: async (req, res) => {
        const id = req.params.id;
        const tasks = await Todotask.findAll({
            attributes: ['id', 'content', 'date'],
            order: [['date', 'DESC']]
        });
        // console.log(tasks.id);
        res.render('todo-edit.ejs', { todoTasks: tasks, idTask: id })
        // todo-edit.ejs에 id와 함께 보냄
    },

    // 수정
    update: (req, res) => {
        const id = req.params.id;
        Todotask.update(
            { content: req.body.content },
            { where: {id: id}}
        )
        res.redirect('/todo');
        console.log("수정 성공!")
    },

    // 삭제
    remove: (req, res) => {
        const id = req.params.id;
        Todotask.destroy({
            where: {id: id}
        })
        res.redirect('/todo');
        console.log("삭제 성공!")
    }
};

module.exports = {
    output
}




    // main: async (req, res) => {
    //     try {
    //         const tododata = await Todotask.findAll({
    //             attributes: ['content', 'date'],
    //             order: [['date', 'DESC']]
    //         });

    //         const client = res.render('todo.ejs', {
    //             title: "Todo List",
    //             data: tododata
    //         });

    //         res.send(client);
    //     } catch(err) {
    //         return err;
    //     }


    // build()와 save() 사용하는 방식!!
    // write: (req, res) => {
    // try {
    //     const client = req.body;
    //     const todoTask = Todotask.build({
    //         content: client.content,
    //         date: moment().format("YYYY-MM-DD HH:mm:ss")
    //     })
    //     if (client.content) {
    //         await todoTask.save();
    //         console.table([{id: todoTask.id, content: todoTask.content, date: todoTask.date}])
    //         res.redirect('/todo');
    //     }
    // } catch(err) {
    //     res.redirect('/todo');
    //     return err;
    // }
