var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

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
