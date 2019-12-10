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
//用户注册
router.get('/addUser', async (req, res, next) => {
  try {
    var pic = null;
    var name = req.query.name;
    var tel = req.query.tel;
    var college = req.query.college;
    college = '河北师范大学 ' + college;
    var pwd = req.query.pwd;
    let sql = 'insert into users(pic, name, tel, college, pwd) values($1,$2,$3,$4,$5)';
    let r = await con.query(sql, [pic, name, tel, college, pwd]);
    console.log(r.rows);
    res.json({ ok: true, msg: '注册成功！' });
  } catch (err) {
    res.json({ ok: false, msg: '注册失败！' });
  }
});
//用户资料修改
router.get('/change', async (req, res, next) => {
  try {
    var pic = req.query.pic
    var name = req.query.name;
    let sql = 'update users set pic=$1 where name=$2';
    let r1 = await con.query(sql, [pic, name]);
    console.log(r1.rows);
    res.json({ ok: true, msg: '修改成功！' });
  } catch (err) {
    res.json({ ok: false, msg: '修改失败！' });
  }
});

router.get('/list', async (req, res, next) => {
  try {
    let sql = 'select * from users order by name desc';
    let r = await con.query(sql, []);
    res.json({ usersList: r.rows });
  } catch (err) {
    console.log(err);
  }
})
//用户登录
router.get('/login', async (req, res, next) => {
  try {
    let sql = 'select pwd from users WHERE name=$1';
    let r = await con.query(sql, [req.query.name]);
    var message = JSON.parse(JSON.stringify(r.rows));
    if (!message.length) {
      res.json({ ok: false, msg: '此用户不存在！' });
    }
    else if (message[0].pwd == req.query.pwd) {
      res.json({ ok: true, msg: '登陆成功！' });
    }
    else {
      res.json({ ok: false, msg: '密码错误！' });
    }
  } catch (err) {
    res.json({ ok: false, msg: '此用户不存在！' });
  }
});
//判断用户名称与电话是否匹配
router.get('/judge', async (req, res, next) => {
  try {
    let sql = 'select tel from users WHERE name=$1';
    let r = await con.query(sql, [req.query.name]);
    var message = JSON.parse(JSON.stringify(r.rows));
    if (!message.length) {
      res.json({ ok: false, msg: '此用户不存在！' });
    }
    else if (message[0].tel == req.query.tel) {
      res.json({ ok: true, msg: '成功！' });
    }
    else {
      res.json({ ok: false, msg: '失败！' });
    }
  } catch (err) {
    res.json({ ok: false, msg: '此用户不存在！' });
  }
})


//修改密码
router.get('/alter', async (req, res, next) => {
  try {
        var name = req.query.name;
        var pwd = req.query.pwd;
        let sql = 'update users set pwd=$1 where name=$2';
        let r1 = await con.query(sql, [pwd,name]);
        console.log(r1.rows);
        res.json({ ok: true, msg: '修改成功！' });
    } catch (err) {
      res.json({ ok: false, msg: '修改失败！' });
    }
});

module.exports = router;

