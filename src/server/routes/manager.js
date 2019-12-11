var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');


// con.connect();
/* GET home page. */

router.get('/addManager', (req, res)=> {
  let sql = 'insert into manager(name,tel,pwd) values($1,$2,$3,$4)';
  con.query(sql, [req.query.name, req.query.tel, req.query.pwd], (err, result) =>{
    if (err) {
      res.json({ ok: false, msg: "注册失败" });
    } else {
      res.json({ ok: true, msg: "注册成功" });
    }
  });
});

router.get('/login', (req, res)=> {
  let sql = 'select pwd from manager WHERE name=$1';
  con.query(sql, [req.query.name], (err, result) =>{
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

router.get('/list', (req, res)=> {
  let sql = 'select * from manager';
  con.query(sql, [], (err, result) =>{
    if (err) {
      // res.send('error');
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

// router.get('/select', (req, res)=> {
//   let sql = 'select * from manager';
//   con.query(sql, [], (err, result) =>{
//     if (err) {
//       // res.send('error');
//       console.log(err);
//     } else {
//       res.send(result.rows);
//     }
//   });
// });


module.exports = router;
