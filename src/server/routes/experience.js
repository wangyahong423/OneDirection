var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from experience  order by id desc';
    con.query(sql, [], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "获取失败" });
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/add', (req, res) => {
    var content = req.query.content;
    var name = req.query.name;
    var time = req.query.time;
    let sql = 'insert into experience(content,name,time) values($1,$2,$3)';
    con.query(sql, [content, name, time], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "添加失败" });
        } else {
            res.json({ ok: true, msg: "添加成功" });
        }
    });
});

router.get('/delete', (req, res) => {
    var id = req.query.id;
    let sql = 'delete from experience where id=$1';
    con.query(sql, [id], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "删除失败" });
        } else {
            res.json({ ok: true, msg: "删除成功" });
        }
    });
});

router.get('/select', (req, res) => {
    var content = req.query.content;
    content = '%' + content + '%';
    let sql = 'select * from experience where content like $1 order by id desc';
    con.query(sql, [content], (err, result) => {
        if (err) {
            res.josn({ ok: false, msg: '查找失败' });
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/change', (req, res) => {
    var id = req.query.eid;
    var cnum = req.query.cnum;
    let sql = 'update experience set cnum=$1 where id=$2';
    con.query(sql, [cnum, id], (err, result) => {
      if (err) {
        res.json({ ok: false, msg: '修改失败！' });
      } else {
        res.json({ ok: true, msg: '修改成功！' });
      }
    });
  });
  
  router.get('/changeLike', (req, res) => {
    var id = req.query.eid;
    var likenum = req.query.likenum;
    let sql = 'update experience set likenum=$1 where id=$2';
    con.query(sql, [likenum, id], (err, result) => {
      if (err) {
        res.json({ ok: false, msg: '修改失败！' });
      } else {
        res.json({ ok: true, msg: '修改成功！' });
      }
    });
  });
module.exports = router;