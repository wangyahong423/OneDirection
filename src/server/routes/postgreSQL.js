const pg = require('pg');
var con = new pg.Client({
  user: 'postgres',
  password: 'duxiu2017!',
  port: 5432,
  database: 'xinsheng',
  host: '139.155.44.190'
});
con.on('error', err => {
  console.log(err);
  process.exit(1);
});

con.connect();

module.exports = con;