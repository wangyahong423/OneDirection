var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from learntalk';
    con.query(sql, [], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            res.send("true");
        }
    });
});

router.get('/add', (req, res) => {
    var lid = req.query.lid;
    var name = req.query.name;
    var content = req.query.content;
    let sql = 'insert into learntalk(lid,name,content) values($1,$2,$3)';
    con.query(sql, [lid, name, content], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            console.log("true");
        }
    });
});

router.get('/delete', (req, res) => {
    var id = req.query.id;
    // var name = req.query.name;
    // var name =  req.query.name;
    let sql = 'delete from learntalk where id=$1';
    con.query(sql, [id], (err, result) => {
        if (err) {
            // res.send('error');
            console.log(err);
        } else {
            console.log('true');
        }
    });
});

module.exports = router;