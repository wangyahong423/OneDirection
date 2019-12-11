var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/add', (req, res) => {
  var cid = req.query.cid;
  var name = req.query.name;
  var content = req.query.content;
  let sql = 'insert into communitytalk(cid, name, content) values($1,$2,$3)';
  con.query(sql, [cid, name, content], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '评论失败！' });
    } else {
      console.log(result.rows);
      res.json({ ok: true, msg: '评论成功！' });
    }
  });
});

router.get('/list', (req, res) => {
  let sql = 'select * from communitytalk order by id desc';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ communitytalk: result.rows });
      console.log(result.rows);
    }
  });
})

router.get('/delete', (req, res) => {
  // var name = req.query.name;
  // var time = req.query.time;
  // var reg = /%20/;
  // time = time.replace(reg, ' ');
  var id = req.query.id;
  let sql = 'delete from communitylike where id=$1';
  con.query(sql, [id], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "删除失败！" });
    } else {
      console.log(result.rows);
      res.json({ ok: true, msg: "删除成功！" });
    }
  });
})

module.exports = router;
