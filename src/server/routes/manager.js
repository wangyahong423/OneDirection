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
/* GET home page. */

router.get('/addManager', async (req, res, next) =>{
  try{
    let sql = 'insert into manager(name,sex,tel,pwd) values($1,$2,$3,$4)';
    let r = await con.query(sql, [req.query.name, req.query.sex, req.query.tel, req.query.pwd]);
    console.log(r.rows);
    res.json({ ok: true, msg: "注册成功" });
  }catch(err){
    res.json({ ok: false, msg: "注册失败" });
  }
});

router.get('/login', async (req, res, next)=> {
    try {
      let sql = 'select pwd from manager WHERE name=$1';
      let r = await con.query(sql, [req.query.name]);
      console.log(r.rows);
      var message = JSON.stringify(r.rows);
      message = JSON.parse(message);
      if (message.length == 0) {
        res.json({ ok: false, msg: "此用户不存在" });
      }
      else if (message[0].pwd == req.query.pwd) {
        res.json({ ok: true, msg: "登陆成功" });
      } else {
        res.json({ ok: false, msg: "密码错误" });
      }
    } catch (err) {
      res.json({ ok: false, msg: "此用户不存在" });
    }
});

router.get('/list', async (req, res, next)=> {
  try {
    let sql = 'select * from manager';
    let r = await con.query(sql, []);
    res.json(r.rows);
    console.log(r.rows);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
