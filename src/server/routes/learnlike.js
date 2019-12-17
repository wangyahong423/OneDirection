var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from learnlike';
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
    let sql = 'insert into learnlike(lid,name) values($1,$2)';
    con.query(sql, [lid, name], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: '点赞失败！' });
          } else {
            res.json({ ok: true, msg: '点赞成功！' });
          }
    });
});

router.get('/delete', (req, res)=> {
    var lid = req.query.lid;
    var name = req.query.name;
        
    let sql = 'delete from learnlike where lid=$1 and name=$2';
    con.query(sql, [lid,name], (err, result) =>{
        if (err) {
            res.json({ ok: false, msg: "取消赞失败！" });
          } else {
            res.json({ ok: true, msg: "取消赞成功！" });
          }
    });
});
module.exports = router;