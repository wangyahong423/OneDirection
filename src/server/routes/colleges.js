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

router.get('/list', async (req, res, next) => {
  try {
    let sql = 'select * from colleges';
    let r = await con.query(sql, []);
    res.json({collegesList:r.rows});
    console.log(r.rows);
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
