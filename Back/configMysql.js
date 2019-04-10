
const mySql = require('mysql');

const connect = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mimicaca',
  database: 'FreelanceVision'
});

module.exports = connect;
