var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

router.get('/list', (req, res) => {
  let sql = 'select * from cet4';
  con.query(sql, [], (err, result) => {
    if (err) {
    } else {
      res.send(result.rows);
    }
  });
})
 
module.exports = router;
