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
    let sql = 'insert into communitylike(cid, name) values($1,$2)';
    let r = await con.query(sql, [cid, name]);
    console.log(r.rows);
    res.json({ ok: true, msg: '点赞成功！' });
  } catch (err) {
    res.json({ ok: false, msg: '点赞失败！' });
  }

});

router.get('/list', async (req, res, next) => {
  try {
    let sql = 'select * from communitylike order by desc';
    let r = await con.query(sql, []);
    res.json({ communitylikeList: r.rows });
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
    res.json({ ok: true, msg: "取消赞成功！" });
  } catch (err) {
    res.json({ ok: false, msg: "取消赞失败！" });
  }
})

module.exports = router;
