const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');

const port = 4000;


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
  const notId = () => { res.status(200).json('badID'); };
  const badPass = () => { res.status(200).json('badPass'); };
  const goodPass = () => { res.status(200).json('passFreeLance'); };
  const goodPass1 = () => { res.status(200).json('passEmployee'); };

  const identifiant = req.body.id;
  const password = req.body.pass;
  console.log('/login');
  console.log(req.body);

  const connect = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Serval7*',
    database: 'FreelanceVision'
  });
  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const sql = `SELECT COUNT(*) FROM salariés WHERE identifiant = ${mySql.escape(identifiant)}`;
  connect.query(sql, (err, result) => {
    console.log(result);
    const idPresent = JSON.stringify(result).indexOf(1);
    console.log(idPresent);
    if (idPresent > 0) {
      const sql1 = `SELECT * FROM salariés WHERE identifiant = ${mySql.escape(identifiant)}`;
      connect.query(sql1, (err1, result1) => {
        if (err1) {
          console.log(err1);
        }
        if (result1[0].Pass === password) {
          goodPass();
        } else if (result1[0].Pass === 'password') {
          goodPass1();
        } else {
          badPass();
        }
        console.log(result1[0].Pass);
      });
    } else {
      notId();
    }
  });
});


app.listen(port, () => {
  console.log(`server started on ${port}`);
});
