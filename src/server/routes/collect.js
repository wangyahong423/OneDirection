var express = require('express');
var router = express.Router();

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from collect';
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
    var filepath = req.query.filepath;
    // var name = req.query.name;
    var name = req.query.name;
    let sql = 'insert into collect values($1,$2)';
    con.query(sql, [filepath, name], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            console.log(result.rows);
        }
    });
});

router.get('/delete', (req, res) => {
    var filepath = req.query.filepath;
    // var name = req.query.name;
    var name = req.query.name;
    let sql = 'delete from collect where filepath=$1 and name=$2';
    con.query(sql, [filepath, name], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            console.log(result.rows);
        }
    });
});

module.exports = router;