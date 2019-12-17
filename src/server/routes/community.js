var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/addCommunity', (req, res) => {
  var content = req.query.content;
  var name = req.query.name;
  var clicks = req.query.clicks;
  var time = req.query.time;
  let sql = 'insert into community(content, name, clicks, time) values($1,$2,$3,$4)';
  con.query(sql, [content, name, clicks, time], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '添加失败！' });
    } else {
      console.log(result.rows);
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
    con.query(sql, [clicks, id],(err,result)=>{
      if(err){
         console.log(err);
      }else{
        console.log(result.rows);
      }
    });
});

// 社区搜索
router.get('/select', (req, res) => {
  var content = req.query.content;
  content = '%'+content+'%';
  let sql = 'select * from community where content like $1';
  con.query(sql, [content], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '查找失败！' });
    } else {
      res.send(result.rows);
    }
  });
});

module.exports = router;
