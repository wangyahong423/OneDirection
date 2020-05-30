var express = require('express');
var router = express.Router();
var url = require("url");
var { checkToken } = require('../config/token');
var con = require('./postgreSQL');

router.get('/addLearn', (req, res)=> {
  let sql = 'insert into learn(content,name,time,card) values($1,$2,$3,$4)';
  con.query(sql, [req.query.content, req.query.name, req.query.time,req.query.card], (err, result) =>{
    if (err) {
      res.json({ ok: false, msg: "发布失败" });
    } else {
      res.json({ ok: true, msg: "发布成功" });
    }
  });
});

router.get('/deleteLearn', (req, res) => {
  let sql = 'delete from learn where id=$1';
  con.query(sql, [req.query.id], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "删除失败" });
    } else {
      res.json({ ok: true, msg: "删除成功" });
    }
  });
});

router.get('/list', (req, res) => {
  let sql = 'select * from learn order by id desc';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});
router.get('/list/:id', (req, res) => {
  let sql = 'select * from learn';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
})

router.get('/select', (req, res) => {
  var content = req.query.content;
  content = '%'+content+'%';
  let sql = 'select * from learn where content like $1 order by id desc';
  con.query(sql, [content], (err, result) => {
    if (err) {
      res.josn({ ok: false, msg: '查找失败' });
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/change', (req, res) => {
  var id = req.query.lid;
  var cnum = req.query.cnum;
  let sql = 'update learn set cnum=$1 where id=$2';
  con.query(sql, [cnum, id], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});

router.get('/changeLike', (req, res) => {
  var id = req.query.lid;
  var likenum = req.query.likenum;
  let sql = 'update learn set likenum=$1 where id=$2';
  con.query(sql, [likenum, id], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});
module.exports = router;
