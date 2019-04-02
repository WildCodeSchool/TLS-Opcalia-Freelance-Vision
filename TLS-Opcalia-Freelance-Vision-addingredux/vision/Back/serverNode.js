const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const port = 4000;


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtSecret = '1234';
app.use(expressJwt({
  secret: jwtSecret
}).unless({
  path: ['/login', '/signup', '/getusers', '/removeuser', '/adduser']
}));

app.post('/adduser', (req, res) => {
  console.log("adduser");
  console.log(req.body);
  let type = ""
  if (req.body.typeToAdd === "Employé") {
    type = "E"

  }
  else {
    type = "F"
  }

  const connect = mySql.createConnection({
    host: 'localhost',
    user: 'appUser',
    password: 'titoul84400',
    database: 'FreelanceVision'
  });

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const sql1 = `INSERT INTO salariés (Identifiant, eMail, type) VALUES (${mySql.escape(req.body.id)}, ${mySql.escape(req.body.userToAdd)},${mySql.escape(type)} )`;
  connect.query(sql1, (err1, result1) => {
    if (err1) {
      console.log(err1);
    }
    console.log(result1);
    // SELECT sur salariés en utilisant result1.insertId
    // attention le select renvoie un tableau et tu peux recup tableau[0]
  })
})

app.post('/removeuser', (req, res) => {
  console.log("remove", req.body.userToremove);

  const connect = mySql.createConnection({
    host: 'localhost',
    user: 'appUser',
    password: 'titoul84400',
    database: 'FreelanceVision'
  });
  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const sql1 = `DELETE FROM salariés WHERE Identifiant = ${mySql.escape(req.body.userToremove)} `;
  connect.query(sql1, (err1, result1) => {
    if (err1) {
      console.log(err1);
    }
    console.log(result1);


  })


})


app.get('/getusers', (req, res) => {
  console.log("reveived request");

  const connect = mySql.createConnection({
    host: 'localhost',
    user: 'appUser',
    password: 'titoul84400',
    database: 'FreelanceVision'
  });
  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const sql1 = `SELECT * FROM salariés WHERE 1`;
  connect.query(sql1, (err1, result1) => {
    console.log(result1);
    const allUsers = result1
    res.send(allUsers)

  })

})

app.post('/login', (req, res) => {
  const notId = () => { res.status(200).json('badID'); };
  const badPass = () => { res.status(200).json('badPass'); };

  const identifiant = req.body.id;
  const password = req.body.pass;
  console.log('/login');
  console.log(req.body);

  const connect = mySql.createConnection({
    host: 'localhost',
    user: 'appUser',
    password: 'titoul84400',
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
          if (result1[0].Type === 'E') {
            console.log("renvoie de employee");
            const token = jwt.sign({
            }, jwtSecret);
            res.status(200).json({
              auth: true,
              token,
              result: 'Employee'
            });
          } else if (result1[0].Type === 'F') {
            console.log("renvoie de freelance");

            const token = jwt.sign({
            }, jwtSecret);
            res.status(200).json({
              auth: true,
              token,
              result: 'Freelance'
            });
          } else {
            console.log("renvoie de admin");
            const token = jwt.sign({
            }, jwtSecret);
            res.status(200).json({
              auth: true,
              token,
              result: 'Admin'
            });
          }
        } else {
          badPass();
        }
      });
    } else {
      notId();
    }
  });
});


app.listen(port, () => {
  console.log(`server started on ${port}`);
});
