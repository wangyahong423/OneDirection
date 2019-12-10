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

router.get('/list', async (req, res, next) => {
    con.connect();
    try {
        let sql = 'select * from learntalk';
        let r = await con.query(sql, []);
        console.log(r.rows);
        res.json(r.rows);
    } catch (err) {
        console.log(err);
    }
    con.end();
});

router.get('/add', async (req, res, next) => {
    con.connect();
    try {
        var lid = req.query.lid;
        var name = req.query.name;
        var content =  req.query.content;
        let sql = 'insert into learntalk(lid,name,content) values($1,$2,$3)';
        let r = await con.query(sql, [lid,name,content]);
        console.log(r.rows);
    } catch (err) {
        console.log(err);
    }
    con.end();
});

router.get('/delete', async (req, res, next) => {
    con.connect();
    try {
        var id = req.query.id;
        // var name = req.query.name;
        // var name =  req.query.name;
        let sql = 'delete from learntalk where id=$1';
        let r = await con.query(sql, [id]);
        console.log(r.rows);
    } catch (err) {
        console.log(err);
    }
    con.end();
});
module.exports = router;