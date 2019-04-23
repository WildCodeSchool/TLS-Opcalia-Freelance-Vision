
const mySql = require('mysql');

const connect = mySql.createConnection({
  host: 'localhost',
  user: 'appUser',
  password: 'titoul84400',
  database: 'FreelanceVision'
});



module.exports = connect;
