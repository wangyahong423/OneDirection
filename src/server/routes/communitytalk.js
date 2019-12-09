var express = require('express');
var router = express.Router();
const pg = require('pg');
var con = new pg.Client({
  user: 'postgres',
  password: 'duxiu2017!',
  port: 5432,
  database: 'xinsheng',
  host: '139.155.44.190'
});
//处理error事件，如果出错则退出
con.on('error', err => {
  console.log(err);
  process.exit(1);
});

con.connect();

router.get('/add', async (req, res, next) => {
  try {
    var cid = req.query.cid;
    var name = req.query.name;
    var content = req.query.content;
    let sql = 'insert into communitytalk(cid, name, content) values($1,$2,$3)';
    let r = await con.query(sql, [cid, name, content]);
    console.log(r.rows);
    res.json({ ok: true, msg: '评论成功！' });
  } catch (err) {
    res.json({ ok: false, msg: '评论失败！' });
  }

});

router.get('/list', async (req, res, next) => {
  try {
    let sql = 'select * from communitytalk order by id desc';
    let r = await con.query(sql, []);
    res.json({communitytalk:r.rows});
    console.log(r.rows);
  } catch (err) {
    console.log(err);
  }
})

router.get('/delete', async (req, res, next) => {
  try {
    // var name = req.query.name;
    // var time = req.query.time;
    // var reg = /%20/;
    // time = time.replace(reg, ' ');
    var id = req.query.id;
    let sql = 'delete from communitylike where id=$1';
    let r = await con.query(sql, [id]);
    console.log(r.rows);
    res.json({ ok: true, msg: "删除成功！" });
  } catch (err) {
    res.json({ ok: false, msg: "删除失败！" });
  }
})

module.exports = router;
