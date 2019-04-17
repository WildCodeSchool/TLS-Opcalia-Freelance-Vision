const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const connect = require('./configMysql');

const port = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtSecretAdmin = '1234';
app.use(expressJwt({
  secret: jwtSecretAdmin
}).unless({
  path: ['/login', '/signup', '/getusers', '/removeuser', '/adduser', '/updateProfile']
}));

const jwtSecretUser = '1234';
app.use(expressJwt({
  secret: jwtSecretUser
}).unless({
  path: ['/login', '/signup', '/getusers', '/removeuser', '/adduser', '/updateProfile']
}));

app.post('/adduser', (req, res) => {
  console.log('adduser');
  console.log(req.body);
  let type = '';
  if (req.body.typeToAdd === 'Employé') {
    type = 'Employee';
  } else {
    type = 'Freelance';
  }

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const addUser = `INSERT INTO salariés (Identifiant, eMail, userType) VALUES (${mySql.escape(req.body.id)}, ${mySql.escape(req.body.userToAdd)},${mySql.escape(type)} )`;
  connect.query(addUser, (err, resultAddUser) => {
    if (err) {
      console.log(err);
    }

    // SELECT sur salariés en utilisant result1.insertId
    // attention le select renvoie un tableau et tu peux recup tableau[0]
    res.status(200).json(resultAddUser);
  });
});

app.post('/removeuser', (req, res) => {
  console.log('remove', req.body.userToremove);

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });
  const deleteUser = `DELETE FROM salariés WHERE Identifiant = ${mySql.escape(req.body.userToremove)} `;
  connect.query(deleteUser, (err, resultDeleteUser) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(resultDeleteUser);
  });
});


app.get('/getusers', (req, res) => {
  connect.connect((err) => {
    if (err) {
      console.log(err);
    }
  });
  const getUsers = 'SELECT * FROM salariés WHERE 1';
  connect.query(getUsers, (err, resultGetUsers) => {
    if (err) {
      console.log(err);
    }
    const allUsers = resultGetUsers;
    res.send(allUsers);
  });
});

app.post('/updateProfile', (req, res) => {
  console.log('req.body.GreyCard', req.body);
  connect.connect((err) => {
    if (err) {
      console.log('err');
    }

  });
  const changeUserInfo = `UPDATE salariés SET carteGrise =${mySql.escape(req.body.addGreyCard)} WHERE eMAil =${mySql.escape(req.body.eMail)}`;

  connect.query(changeUserInfo, (err1, resultChange) => {
    if (err1) {
      console.log(err1);
    }
    console.log(resultChange);
    res.status(200).json(resultChange);
  });
});

app.post('/login', (req, res) => {
  const notId = () => { res.status(200).json('badID'); };
  const badPass = () => { res.status(200).json('badPass'); };

  const identifiant = req.body.id;
  const password = req.body.pass;
  console.log('/login');
  console.log(req.body);


  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const checkUserIsPresent = `SELECT COUNT(*) FROM salariés WHERE identifiant = ${mySql.escape(identifiant)}`;
  connect.query(checkUserIsPresent, (errCheck, resultCheckUser) => {
    if (errCheck) {
      console.log(errCheck);
    }
    const index = JSON.stringify(resultCheckUser).indexOf(1);
    if (index > 0) {
      const selectUser = `SELECT * FROM salariés WHERE identifiant = ${mySql.escape(identifiant)}`;
      connect.query(selectUser, (err, resultSelectUser) => {
        if (err) {
          console.log(err);
        }
        if (resultSelectUser[0].Pass === password) {
          if (resultSelectUser[0].userType === 'Employee') {
            console.log('renvoie de employee');
            const tokenUser = jwt.sign({
            }, jwtSecretUser);
            res.status(200).json({
              auth: true,
              tokenUser,
              result: resultSelectUser[0].userType,
              nomProfile: resultSelectUser[0].Nom,
              prenomProfile: resultSelectUser[0].Prenom,
              identifiantProfile: resultSelectUser[0].Identifiant,
              typeProfile: resultSelectUser[0].userType,
              eMailProfile: resultSelectUser[0].eMail
            });
          } else if (resultSelectUser[0].userType === 'Freelance') {
            const tokenUser = jwt.sign({
            }, jwtSecretUser);
            res.status(200).json({
              auth: true,
              tokenUser,
              result: resultSelectUser[0].userType,
              nomProfile: resultSelectUser[0].Nom,
              prenomProfile: resultSelectUser[0].Prenom,
              identifiantProfile: resultSelectUser[0].Identifiant,
              typeProfile: resultSelectUser[0].userType,
              eMailProfile: resultSelectUser[0].eMail
            });
          } else {
            const tokenAdmin = jwt.sign({
            }, jwtSecretAdmin);
            res.status(200).json({
              auth: true,
              tokenAdmin,
              result: resultSelectUser[0].userType
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
