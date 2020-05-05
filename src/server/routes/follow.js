var express = require('express');
var router = express.Router();
var url = require("url");
var { checkToken } = require('../config/token');
var con = require('./postgreSQL');

router.get('/list', (req, res) => {
    let sql = 'select * from follow order by id desc';
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});
router.get('/list/:id', (req, res) => {
    let sql = 'select * from follow';
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
})
router.get('/selectl', (req, res) => {
    var lname = req.query.lname;
    lname = '%' + lname + '%';
    let sql = 'select * from follow where lname like $1 ';
    con.query(sql, [lname], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});
router.get('/selectn', (req, res) => {
    var nname = req.query.nname;
    nname = '%' + nname + '%';
    let sql = 'select * from follow where nname like $1 ';
    con.query(sql, [nname], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});
router.get('/add', (req, res) => {
    let sql = 'insert into follow(lname,nname) values($1,$2)';
    con.query(sql, [req.query.lname, req.query.nname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "关注失败" });
        } else {
            res.json({ ok: true, msg: "已关注" });
        }
    });
});
module.exports = router;
