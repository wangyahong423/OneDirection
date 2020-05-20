var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var managername = '';

router.get('/getName', (req, res) => {
  managername = req.query.name ? req.query.name : managername;
  res.json({ name: managername });
});


router.get('/addManager', (req, res) => {
  var name = req.query.name;
  var tel = req.query.tel;
  var pwd = req.query.pwd;
  if (name && tel && pwd) {
    let sql = 'insert into manager(name,tel,pwd) values($1,$2,$3)';
    con.query(sql, [req.query.name, req.query.tel, req.query.pwd], (err, result) => {
      if (err) {
        res.json({ ok: false, msg: "注册失败" });
      } else {
        res.json({ ok: true, msg: "注册成功" });
      }
    });
  }
  else{
    res.json({ msg: "所有项应该非空" });
  }

});

router.get('/login', (req, res) => {
  let sql = 'select pwd from manager WHERE name=$1';
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

router.get('/list', (req, res) => {
  let sql = 'select * from manager';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/select', (req, res) => {
  var name = req.query.name;
  name = '%' + name + '%';
  let sql = 'select * from manager where name like $1';
  con.query(sql, [name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '查找失败！' });
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/deleteManager', (req, res) => {
  var name = req.query.name;
  let sql = 'delete from manager where name=$1';
  con.query(sql, [name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "删除失败！" });
    } else {
      res.json({ ok: true, msg: "删除成功！" });
    }
  });
})

router.get('/judge', (req, res) => {
  let sql = 'select tel from manager WHERE name=$1';
  con.query(sql, [req.query.name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "此管理员不存在" });
      console.log(err);
    } else {
      var message = JSON.parse(JSON.stringify(result.rows));
      if (message.length == 0) {
        res.json({ ok: false, msg: "此管理员不存在" });
      }
      else if (message[0].tel == req.query.tel) {
        res.json({ ok: true, msg: "成功" });
      } else {
        res.json({ ok: false, msg: "失败" });
      }
    }
  });
})
router.get('/alter', (req, res) => {
  var name = req.query.name;
  var pwd = req.query.pwd;
  let sql = 'update manager set pwd=$1 where name=$2';
  con.query(sql, [pwd, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});

module.exports = router;
