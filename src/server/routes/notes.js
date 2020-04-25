var express = require('express');
var router = express.Router();
var url = require("url");
var { checkToken } = require('../config/token');
var con = require('./postgreSQL');

router.get('/addNote', (req, res) => {
    let sql = 'insert into notes(content,name,time,title) values($1,$2,$3,$4)';
    con.query(sql, [req.query.content, req.query.name, req.query.time, req.query.title], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "发布失败" });
        } else {
            res.json({ ok: true, msg: "发布成功" });
        }
    });
});

router.get('/deleteNote', (req, res) => {
    let sql = 'delete from notes where id=$1';
    con.query(sql, [req.query.id], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "删除失败" });
        } else {
            res.json({ ok: true, msg: "删除成功" });
        }
    });
});

router.get('/list', (req, res) => {
    let sql = 'select * from notes order by id desc';
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});
router.get('/list/:id', (req, res) => {
    let sql = 'select * from notes';
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
})

router.get('/selectContent', (req, res) => {
    var content = req.query.content;
    content = '%' + content + '%';
    let sql = 'select * from notes where content like $1';
    con.query(sql, [content], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});
router.get('/selectTitle', (req, res) => {
    var title = req.query.title;
    title = '%' + title + '%';
    let sql = 'select * from notes where title like $1';
    con.query(sql, [title], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});

module.exports = router;
