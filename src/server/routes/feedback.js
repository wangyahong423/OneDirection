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

/* GET users listing. */

router.get('/addFeedback', async (req, res, next) => {
  try {
    var content = req.query.content;
    var tel = req.query.tel;
    var time = req.query.time;
    let sql = 'insert into feedback(content, tel, time) values($1,$2,$3)';
    let r = await con.query(sql, [content, tel, time]);
    console.log(r.rows);
    res.json({ ok: true, msg: '反馈成功！' });
  } catch (err) {
    res.json({ ok: false, msg: '反馈失败！' });
  }

});

router.get('/list', async (req, res, next) => {
  try {
    let sql = 'select * from feedback order by tel,time desc';
    let r = await con.query(sql, []);
    res.json({feedback:r.rows});
    console.log(r.rows);
  } catch (err) {
    console.log(err);
  }
})

router.get('/deleteFeedback', async (req, res, next) => {
  try {
    var tel = req.query.tel;
    var time = req.query.time;
    var reg = /%20/;
    time = time.replace(reg, ' ');
    let sql = 'delete from feedback where tel=$1 and time=$2';
    let r = await con.query(sql, [tel, time]);
    console.log(r.rows);
    res.json({ ok: true, msg: "删除成功！" });
  } catch (err) {
    res.json({ ok: false, msg: "删除失败！" });
  }
});

module.exports = router;
