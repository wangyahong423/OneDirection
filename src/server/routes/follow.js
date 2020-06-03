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
router.get('/delete', (req, res) => {
    var nname = req.query.nname;
    let sql = 'delete from follow where nname=$1';
    con.query(sql, [nname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "取消关注失败！" });
        } else {
            res.json({ ok: true, msg: "取消关注！" });
        }
    });
})
router.get('/changeL', (req, res) => {
    var lname = req.query.lname;
    var learn = req.query.learn;
    let sql = 'update follow set learn=$1 where lname=$2';
    con.query(sql, [learn, lname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '修改失败！' });
        } else {
            res.json({ ok: true, msg: '修改成功！' });
        }
    });
});

router.get('/changeE', (req, res) => {
    var lname = req.query.lname;
    var experience = req.query.experience;
    let sql = 'update follow set experience=$1 where lname=$2';
    con.query(sql, [experience, lname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '修改失败！' });
        } else {
            res.json({ ok: true, msg: '修改成功！' });
        }
    });
});
router.get('/changeLL', (req, res) => {
    var lname = req.query.lname;
    var learn = req.query.learn;
    var nname = req.query.nname;
    let sql = 'update follow set learn=$1 where lname=$2 and nname=$3';
    con.query(sql, [learn, lname,nname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '修改失败！' });
        } else {
            res.json({ ok: true, msg: '修改成功！' });
        }
    });
});

router.get('/changeEE', (req, res) => {
    var lname = req.query.lname;
    var nname = req.query.nname;
    var experience = req.query.experience;
    let sql = 'update follow set experience=$1 where lname=$2 and nname=$3';
    con.query(sql, [experience, lname,nname], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '修改失败！' });
        } else {
            res.json({ ok: true, msg: '修改成功！' });
        }
    });
});
module.exports = router;
