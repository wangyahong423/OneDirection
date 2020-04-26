var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from learntalk';
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/add', (req, res) => {
    var lid = req.query.lid;
    var name = req.query.name;
    var content = req.query.content;
    var time = req.query.time;
    let sql = 'insert into learntalk(lid,name,content,time) values($1,$2,$3,$4)';
    con.query(sql, [lid, name, content, time], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '评论失败！' });
        } else {
            res.json({ ok: true, msg: '评论成功！' });
        }
    });
});

router.get('/delete', (req, res) => {
    var id = req.query.id;
    let sql = 'delete from learntalk where id=$1';
    con.query(sql, [id], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '删除失败！' });
        } else {
            res.json({ ok: true, msg: '删除成功！' });
        }
    });
});
router.get('/deleteAll', (req, res) => {
    var lid = req.query.lid;
    let sql = 'delete from learntalk where lid=$1';
    con.query(sql, [lid], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '删除失败！' });
        } else {
            res.json({ ok: true, msg: '删除成功！' });
        }
    });
});

module.exports = router;