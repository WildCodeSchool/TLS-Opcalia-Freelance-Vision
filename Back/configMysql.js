
const mySql = require('mysql');

const connect = mySql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'azerty1234',
  database: 'freelanceVision'
});

module.exports = connect;
