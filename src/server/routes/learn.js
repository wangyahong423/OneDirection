var express = require('express');
var router = express.Router();
var url = require("url");
var { checkToken } = require('../config/token');
var con = require('./postgreSQL');


//处理error事件，如果出错则退出

router.get('/addLearn', (req, res)=> {
  let sql = 'insert into learn(content,name,time,pic) values($1,$2,$3,$4)';
  con.query(sql, [req.query.content, req.query.name, req.query.time, req.query.pic], (err, result) =>{
    if (err) {
      // res.send('error');
      res.json({ ok: false, msg: "发布失败" });
    } else {
      res.json({ ok: true, msg: "发布成功" });
    }
  });
  // var data = req.query.data;
  // checkToken(data, async (r) => {
  // console.log(r);
});

router.get('/deleteLearn', (req, res) => {
  // var time = req.query.time;
  // var reg = /%20/;
  // time = time.replace(reg, ' ');
  // let parsedUrl = url.parse(req.url, true);
  // let name = parsedUrl.query.name;
  let sql = 'delete from learn where id=$1';
  con.query(sql, [req.query.id], (err, result) => {
    if (err) {
      // res.send('error');
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
      // res.send('error');
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/select', (req, res) => {
  var content =req.query.content;
  content = '%'+content+'%';
  let sql = 'select * from learn where content like $1';
  con.query(sql, [content], (err, result) => {
    if (err) {
      // res.send('error');
      res.josn({ ok: false, msg: '查找失败' });
    } else {
      res.josn({ ok: true, msg: result.rows });
    }
  });
});
module.exports = router;
