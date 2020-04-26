var express = require('express');
var router = express.Router();
var url = require("url");
var { checkToken } = require('../config/token');
var con = require('./postgreSQL');

router.get('/addNote', (req, res) => {
    let sql = 'insert into notes(content,name,time,title,show) values($1,$2,$3,$4,$5)';
    con.query(sql, [req.query.content, req.query.name, req.query.time, req.query.title, req.query.show], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "保存失败" });
        } else {
            res.json({ ok: true, msg: "保存成功" });
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

router.get('/select', (req, res) => {
    var show = req.query.show;
    show = '%' + show + '%';
    let sql = 'select * from notes where show like $1 ';
    con.query(sql, [show], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/change', (req, res) => {
    var content = req.query.content;
    var title = req.query.title;
    var time = req.query.time;
    var show = req.query.show;
    var id = req.query.id;
    let sql = 'update notes set content=$1,title=$2,time=$3,show=$4 where id=$5';
    con.query(sql, [content, title, time, show, id], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '修改失败！' });
        } else {
            res.json({ ok: true, msg: '修改成功！' });
        }
    });
});

module.exports = router;
