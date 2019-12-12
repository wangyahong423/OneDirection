var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/addCommunity', (req, res) => {
  var content = req.query.content;
  var name = req.query.name;
  var clicks = req.query.clicks;
  var time = req.query.time;
  var pic = req.query.pic;
  let sql = 'insert into community(content, name, clicks, time, pic) values($1,$2,$3,$4,$5)';
  con.rquery(sql, [content, name, clicks, time, pic], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '添加失败！' });
    } else {
      res.json({ ok: true, msg: '添加成功！' });
    }
  });

});

router.get('/list', (req, res) => {
  let sql = 'select * from community order by id desc';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
})

router.get('/list/:id', (req, res) => {
  let sql = 'select * from community';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
})


router.get('/deleteCommunity', (req, res) => {
  // var name = req.query.name;
  // var time = req.query.time;
  // var reg = /%20/;
  // time = time.replace(reg, ' ');
  var id = req.query.id;
  let sql = 'delete from community where id=$1';
  con.query(sql, [id], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "删除失败！" });
    } else {
      res.json({ ok: true, msg: "删除成功！" });
    }
  });
})
//更新点击量
router.get('/updateCommunity', (req, res) => {
  var clicks = req.query.clicks;
  var id = req.query.id;
  let sql = 'update community set clicks=$1 where id=$2';
  con.query(sql, [clicks, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('true');
    }
  });
})

module.exports = router;
