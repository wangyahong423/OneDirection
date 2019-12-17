var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

/* GET home page. */

var username='';

router.get('/getName', (req, res)=> {
  username = req.query.name ? req.query.name : username;
  res.json({name: username});
});

//用户注册
router.get('/addUser', (req, res) => {
  var pic = "/images/1.jpg";
  var name = req.query.name;
  var tel = req.query.tel;
  var college = req.query.college;
  college = college;
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

// 用户搜索
router.get('/select', (req, res) => {
  var name = req.query.name;
  name = '%'+name+'%';
  let sql = 'select * from users where name like $1';
  con.query(sql, [name], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '查找失败！' });
    } else {
      res.send(result.rows);
    }
  });
});

/**获取验证码 */
router.get('/Getnum',(req,res)=>{
  function randomn(n) {
      if (n > 21) return null
      return parseInt((Math.random() + 1) * Math.pow(10,n-1))
  }
  var trueCode = randomn(6);
  let message1 = {success:true,trueNum:trueCode};
  let phoneNum = JSON.parse(req.query.tel); 
  var QcloudSms = require("qcloudsms_js");
  // 短信应用 SDK AppID
  var appid = 1400294829;  // SDK AppID 以1400开头
  // 短信应用 SDK AppKey
  var appkey = "a3ef6be1ae92fb5e9f9cd66789bed33a";
  // 需要发送短信的手机号码
  var phoneNumbers = [phoneNum];
  // 短信模板 ID，需要在短信控制台中申请
  var templateId = 492759;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
  // 签名
  var smsSign = "独秀三两枝";  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
  // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
  function callback(err, res, resData) {
      if (err) {
          console.log("err: ", err);
      } else {
          console.log("request data: ", res.req);
          console.log("response data: ", resData);
      }
  }
  // 实例化 QcloudSms
  var qcloudsms = QcloudSms(appid, appkey);
  var ssender = qcloudsms.SmsSingleSender();
  var params = [trueCode];
  ssender.sendWithParam("86", phoneNumbers[0], templateId,
  params, smsSign, "", "", callback);
  res.send(message1);
})


module.exports = router;