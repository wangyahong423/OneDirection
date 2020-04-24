var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from collect order by id desc';
    con.query(sql, [], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "获取失败" });
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/addCollect', (req, res) => {
    var eid = req.query.eid;
    var name = req.query.name;
    let sql = 'insert into collect(eid,name) values($1,$2)';
    con.query(sql, [eid, name], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "添加失败" });
        } else {
            res.json({ ok: true, msg: "添加成功" });
        }
    });
});

router.get('/deleteCollect', (req, res) => {
    var eid = req.query.eid;
    var name = req.query.name;
    let sql = 'delete from collect where eid=$1 and name=$2';
    con.query(sql, [eid,name], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "删除失败" });
        } else {
            res.json({ ok: true, msg: "删除成功" });
        }
    });
});

module.exports = router;