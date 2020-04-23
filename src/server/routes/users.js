var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var username = '';

router.get('/getName', (req, res) => {
  username = req.query.name ? req.query.name : username;
  res.json({ name: username });
});

router.get('/addUser', (req, res) => {
  var pic = "/images/1.jpg";
  var level = 1;
  var lvnum = 0;
  var name = req.query.name;
  var tel = req.query.tel;
  var college = req.query.college;
  var pwd = req.query.pwd;
  var islogin = false;
  console.log(2);
  let sql = 'insert into users(pic, level, lvnum, name, tel, college, pwd, islogin) values($1,$2,$3,$4,$5,$6,$7,$8)';
  con.query(sql, [pic, level, lvnum, name, tel, college, pwd, islogin], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '注册失败！' });
    } else {
      res.json({ ok: true, msg: '注册成功！' });
      console.log(1);
    }
  });
});
router.get('/change', (req, res) => {
  var pic = req.query.pic;
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
router.get('/login', (req, res) => {
  let sql = 'select pwd,islogin from users WHERE name=$1';
  con.query(sql, [req.query.name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: "错误" });
      console.log(err);
    } else {
      var message = JSON.parse(JSON.stringify(result.rows));
      if (message.length == 0) {
        res.json({ ok: false, msg: "此用户不存在" });
      }
      else {
        if (message[0].pwd == req.query.pwd) {
          if (message[0].islogin == false) {
            res.json({ ok: true, msg: "登录成功" });
            var name = req.query.name;
            var islogin = true;
            let sql1 = 'update users set islogin=$1 where name=$2';
            con.query(sql1, [islogin, name], (err, result) => {

            });
          }
          else {
            res.json({ ok: false, msg: "此用户已登录" });
          }
        }
        else {
          res.json({ ok: false, msg: '密码错误' });
        }
      }
    }
  });
});

//退出登录
router.get('/exitLogin', (req, res) => {
  var name = req.query.name;
  var islogin = req.query.islogin;
  let sql = 'update users set islogin=$1 where name=$2';
  con.query(sql, [islogin, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '退出成功！' });
    }
  });
});

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
  let sql = 'update users set pwd=$1 where name=$2';
  con.query(sql, [pwd, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '修改失败！' });
    } else {
      res.json({ ok: true, msg: '修改成功！' });
    }
  });
});

router.get('/select', (req, res) => {
  var name = req.query.name;
  name = '%' + name + '%';
  let sql = 'select * from users where name like $1';
  con.query(sql, [name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '查找失败！' });
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/changeLv', (req, res) => {
  var level = req.query.level;
  var name = req.query.name;
  let sql = 'update users set level=$1 where name=$2';
  con.query(sql, [level, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '升级失败！' });
    } else {
      res.json({ ok: true, msg: '升级成功！' });
    }
  });
});

router.get('/changeLvnum', (req, res) => {
  var name = req.query.name;
  var lvnum = req.query.lvnum;
  let sql = 'update users set lvnum=$1 where name=$2';
  con.query(sql, [lvnum, name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '操作失败！' });
    } else {
      res.json({ ok: true, msg: '操作成功！' });
    }
  });
});

router.get('/Getnum', (req, res) => {
  function randomn(n) {
    if (n > 21) return null
    return parseInt((Math.random() + 1) * Math.pow(10, n - 1))
  }
  var trueCode = randomn(6);
  let message1 = { success: true, trueNum: trueCode };
  let phoneNum = JSON.parse(req.query.tel);
  var QcloudSms = require("qcloudsms_js");
  var appid = 1400294829;
  var appkey = "a3ef6be1ae92fb5e9f9cd66789bed33a";
  var phoneNumbers = [phoneNum];
  var templateId = 492759;
  var smsSign = "独秀三两枝";
  function callback(err, res, resData) {
    if (err) {
      console.log("err: ", err);
    } else {
      console.log("request data: ", res.req);
      console.log("response data: ", resData);
    }
  }
  var qcloudsms = QcloudSms(appid, appkey);
  var ssender = qcloudsms.SmsSingleSender();
  var params = [trueCode];
  ssender.sendWithParam("86", phoneNumbers[0], templateId,
    params, smsSign, "", "", callback);
  res.send(message1);
})


module.exports = router;