var express = require('express');
var router = express.Router();
const url = require('url');
const path = require('path');
var con = require('./postgreSQL');

var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

router.post('/addFile', (req, res) => {
  var form = new multiparty.Form();
  form.encoding = 'utf-8';
  form.uploadDir = './public/files';
  form.parse(req, async (err, fields, files) => {
    var filesTemp = JSON.stringify(files, null, 2);
    if (err) {
      console.log('parse error:' + err);
    } else {
      var inputFile = files.inputFile[0];
      var uploadedPath = inputFile.path;
      var dstPath = './public/files/' + inputFile.originalFilename;
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
          console.log('rename error:' + err);
        } else {
          console.log('rename ok');
        }
      })
    }

    var type1 = inputFile.originalFilename.split('.');
    var type = type1[type1.length-1];
    var myDate = new Date();
    var time1 = myDate.toLocaleDateString();
    var time2 = myDate.toLocaleTimeString();
    var reg = / /g;
    time2 = time2.replace(reg, '');
    var time = time1 + ' ' + time2;
    var name = req.query.name;
    console.log(inputFile.originalFilename, name, time, type);
    let sql = 'insert into file(filepath,name,time,type) values($1,$2,$3,$4)';
    con.query(sql, [inputFile.originalFilename, name, time, type], (err, result) => {
      if (err) {
      } else {
      }
    });
  })
})

router.get('/list', (req, res) => {
  let sql = 'select * from file';
  con.query(sql, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/deleteFile', (req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let filepath = parsedUrl.query.filepath;
  let sql = 'delete from file where filepath=$1';
  con.query(sql, [filepath], (err, result) => {
    if (err) {
      res.send({ ok: false, msg: "删除失败" });
    } else {
      res.send({ ok: true, msg: "删除成功" });
      var pathname = path.join('./public/files/' + filepath);
      fs.unlinkSync(pathname);
    }
  });
});

router.get('/select', (req, res) => {
  var filepath = '%' + req.query.title + '%';
  let sql = 'select * from file where filepath like $1';
  con.query(sql, [filepath], (err, result) => {
    if (err) {
      res.json({ ok: false, msg: '查找失败' });
    } else {
      res.send(result.rows);
    }
  });
});
module.exports = router;