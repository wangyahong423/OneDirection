const pg = require('pg');
var con = new pg.Client({
  user: 'postgres',
  password: 'duxiu2017!',
  port: 5432,
  database: 'xinsheng',
  host: '127.0.0.1'
});
con.on('error', err => {
  console.log(err);
  process.exit(1);
});

con.connect();

module.exports = con;