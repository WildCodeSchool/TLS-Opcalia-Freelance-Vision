
const mySql = require('mysql');

const connect = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Serval7*',
  database: 'FreelanceVision'
});

module.exports = connect;
