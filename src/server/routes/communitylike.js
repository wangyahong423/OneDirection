var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/add', (req, res) => {
  var cid = req.query.cid;
  var name = req.query.name;
  let sql = 'insert into communitylike(cid, name) values($1,$2)';
  con.query(sql, [cid, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '点赞失败！' });
    } else {
      res.json({ ok: true, msg: '点赞成功！' });
    }
  });
});

router.get('/list', (req, res) => {

  let sql = 'select * from communitylike';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result.rows);
    }
  });
})

router.get('/delete', (req, res) => {
  var cid = req.query.cid;
  var name = req.query.name;
  let sql = 'delete from communitylike where cid=$1 and name=$2';
  con.query(sql, [cid,name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "取消赞失败！" });
    } else {
      res.json({ ok: true, msg: "取消赞成功！" });
    }
  });
})

module.exports = router;
