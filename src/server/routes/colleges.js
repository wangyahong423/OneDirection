var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

// router.get('/', function (req, res, next) {
//   res.render('colleges');
// });

// router.get('/add', (req, res) => {
//   var college = req.query.college;
//   var history = req.query.history;
//   var introdution = req.query.introdution;
//   let sql = 'insert into colleges(college, history, introdution) values($1,$2,$3)';
//   con.query(sql, [college, history, introdution], (err, result) => {
//     if (err) {
//       res.json({ ok: false, msg: '添加失败！' });
//       console.log(err);
//     } else {
//       res.json({ ok: true, msg: '添加成功！' });

//     }
//   })
// });

router.get('/list', (req, res) => {
  let sql = 'select * from colleges';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
})

module.exports = router;
