var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/addFeedback', (req, res) => {
  var content = req.query.content;
  var tel = req.query.tel;
  var time = req.query.time;
  let sql = 'insert into feedback(content, tel, time) values($1,$2,$3)';
  con.query(sql, [content, tel, time], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '反馈失败！' });
    } else {
      console.log(result.rows);
      res.json({ ok: true, msg: '反馈成功！' });
    }
  });
});

router.get('/list', (req, res) => {
  let sql = 'select * from feedback order by tel,time desc';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
})

router.get('/deleteFeedback', (req, res) => {
  var tel = req.query.tel;
  var time = req.query.time;
  var reg = /%20/;
  time = time.replace(reg, ' ');
  let sql = 'delete from feedback where tel=$1 and time=$2';
  con.query(sql, [tel, time], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "删除失败！" });
    } else {
      res.json({ ok: true, msg: "删除成功！" });
    }
  });
});

router.get('/select', (req, res) => {
  var content = req.query.content;
  content = '%' + content + '%';
  let sql = 'select * from feedback where content like $1 order by id desc';
  con.query(sql, [content], (err, result) => {
    if (err) {
      res.josn({ ok: false, msg: '查找失败' });
    } else {
      res.send(result.rows);
    }
  });
});
module.exports = router;
