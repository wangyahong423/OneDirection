var express = require('express');
var router = express.Router();

var { checkToken } = require('../config/token');

const pg = require('pg');
var con = new pg.Client({
  user: 'postgres',
  password: 'duxiu2017!',
  port: 5432,
  database: 'xinsheng',
  host: '139.155.44.190'
});
//处理error事件，如果出错则退出
con.on('error', err => {
  console.log(err);
  process.exit(1);
});

con.connect();

router.get('/list', async (req, res, next) => {
    try {
        let sql = 'select * from collect';
        let r = await con.query(sql, []);
        console.log(r.rows);
        res.json(r.rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/add', async (req, res, next) => {
    try {
        var filepath = req.query.filepath;
        // var name = req.query.name;
        var name =  req.query.name;
        let sql = 'insert into collect values($1,$2)';
        let r = await con.query(sql, [filepath,name]);
        console.log(r.rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/delete', async (req, res, next) => {
    try {
        var filepath = req.query.filepath;
        // var name = req.query.name;
        var name =  req.query.name;
        let sql = 'delete from collect where filepath=$1 and name=$2';
        let r = await con.query(sql, [filepath,name]);
        console.log(r.rows);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;