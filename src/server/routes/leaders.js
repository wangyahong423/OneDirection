var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');
// router.get('/', function (req, res, next) {
//   res.render('leaders');
// });

// router.get('/add', (req, res) => {
//   var college = req.query.college;
//   var job = req.query.job;
//   var name = req.query.name;
//   var tel = req.query.tel;
//   var email = req.query.email;
//   let sql = 'insert into leaders(college, job, name, tel, email) values($1,$2,$3,$4,$5)';
//   con.query(sql, [college, job, name, tel, email], (err, result) => {
//     if (err) {
//       res.json({ ok: false, msg: '添加失败！' });
//     } else {
//       res.json({ ok: true, msg: '添加成功！' });

//     }
//   })
// })

router.get('/list', function (req, res) {
  let sql = 'select * from leaders';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  })
});

module.exports = router;
