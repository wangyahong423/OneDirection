var express = require('express');
var router = express.Router();

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from learnlike';
    con.query(sql, [], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/add', (req, res) => {
    var lid = req.query.lid;
    var name = req.query.name;
    let sql = 'insert into learnlike(lid,name) values($1,$2)';
    con.query(sql, [lid, name], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            console.log(result.rows);
        }
    });
});

router.get('/delete', (req, res)=> {
    var id = req.query.id;
        // var name = req.query.name;
        // var name =  req.query.name;
        let sql = 'delete from learnlike where id=$1';
    con.query(sql, [id], (err, result) =>{
      if (err) {
        // res.send('error');
        console.log(err);
      } else {
        console.log(result.rows);
      }
    });
});
module.exports = router;