var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

/* GET home page. */
//用户注册
router.get('/addUser', (req, res) => {
  var pic = null;
  var name = req.query.name;
  var tel = req.query.tel;
  var college = req.query.college;
  college = '河北师范大学 ' + college;
  var pwd = req.query.pwd;
  let sql = 'insert into users(pic, name, tel, college, pwd) values($1,$2,$3,$4,$5)';
  con.query(sql, [pic, name, tel, college, pwd], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '注册失败！' });
    } else {
      res.json({ ok: true, msg: '注册成功！' });

    }
  });
});
//用户资料修改
router.get('/change', (req, res) => {
  var pic = req.query.pic
  var name = req.query.name;
  let sql = 'update users set pic=$1 where name=$2';
  con.query(sql, [pic, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});

router.get('/list', (req, res) => {
  let sql = 'select * from users order by name desc';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });



})
//用户登录
router.get('/login', (req, res) => {
  let sql = 'select pwd from users WHERE name=$1';
  con.query(sql, [req.query.name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "此用户不存在" });
      console.log(err);
    } else {
      var message = JSON.parse(JSON.stringify(result.rows));
      if (message.length == 0) {
        res.json({ ok: false, msg: "此用户不存在" });
      }
      else if (message[0].pwd == req.query.pwd) {
        res.json({ ok: true, msg: "登陆成功" });
      } else {
        res.json({ ok: false, msg: "密码错误" });
      }
    }
  });
});
//判断用户名称与电话是否匹配
router.get('/judge', (req, res) => {
  let sql = 'select tel from users WHERE name=$1';
  con.query(sql, [req.query.name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "此用户不存在" });
      console.log(err);
    } else {
      var message = JSON.parse(JSON.stringify(result.rows));
      if (message.length == 0) {
        res.json({ ok: false, msg: "此用户不存在" });
      }
      else if (message[0].pwd == req.query.pwd) {
        res.json({ ok: true, msg: "成功" });
      } else {
        res.json({ ok: false, msg: "失败" });
      }
    }
  });
})


//修改密码
router.get('/alter', (req, res) => {
  var name = req.query.name;
  var pwd = req.query.pwd;
  let sql = 'update users set pwd=$1 where name=$2';
  con.query(sql, [pwd, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});

module.exports = router;

