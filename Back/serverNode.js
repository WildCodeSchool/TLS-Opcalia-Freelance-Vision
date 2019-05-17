const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const connect = require('./configMysql');
const multer = require('multer');
const config = require('../Front/src/config.json');


const port = 4000;

var storageProfileFiles = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profileFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload = multer({ storage: storageProfileFiles }).single('file')


var storageJustifs = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'justifsFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload1 = multer({ storage: storageJustifs }).single('file')


const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/../Front/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('justifsFiles'));

const jwtSecret = config.jwtSecret;
app.use(expressJwt({
  secret: jwtSecret
}).unless({
  path: ['/', '/tableNoteDeFrais', '/lib/noty.js', '/lib/noty.css', '/login', '/signup', '/getusers', '/removeuser', '/adduser', '/updateProfile', '/cra', '/noteDeFrais', '/sendFiles', '/sendJustifs', '/configuser', '/justifsFiles', '/tableCra', '/tableNoteDeFrais', '/tableFiles']
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


  const addUser = `INSERT INTO salariés (Identifiant, eMail, userType, Pass) VALUES (${mySql.escape(req.body.id)}, ${mySql.escape(req.body.userToAdd)},${mySql.escape(type)}, ${mySql.escape(req.body.password)} )`;
  connect.query(addUser, (err, resultAddUser) => {
    if (err) {
      console.log(err);
    }

    // SELECT sur salariés en utilisant result1.insertId
    // attention le select renvoie un tableau et tu peux recup tableau[0]
    res.status(200).json(resultAddUser);
  });
});

app.post('/getImgProfile', (req, res) => {

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
    const getImg = `SELECT * justiFiles WHERE userID=${mySql.escape(req.body.id)}AND date=${mySql.escape(req.body.formatedDate)}`
    connect.query(getImg, (err, resultImg) => {
      console.log(resultImg);
      res.status(200).json(resulImg)
    })
  });
})

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

app.post('/configuser', (req, res) => {
  console.log(req.body);
  res.json('test');
})

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
  console.log('##### BODY : ', req.body);
  const { changeTelephone, changeNom, changePrenom, changeIdentifiant, changeEmail, id } = req.body
  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });
  const sql = `UPDATE salariés SET Nom=${mySql.escape(changeNom)}, Prenom=${mySql.escape(changePrenom)}, telephone=${mySql.escape(changeTelephone)}, eMail=${mySql.escape(changeEmail)} WHERE Identifiant=${mySql.escape(changeIdentifiant)};`
  connect.query(sql, (err1, resultChange) => {
    if (err1) {
      console.log(err1);
    }
    console.log('resultChange', resultChange);
    res.status(200).json(resultChange);
  });
});

app.post('/sendFiles', function (req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    console.log('listfile', req.file);
    connect.connect((err1) => {
      if (err1) {
        console.log('err1');
      }
    });
    const InsertjustifyFiles = `INSERT INTO justiFiles (userID, date, img, typeFile) VALUES (${mySql.escape(req.query.id)}, ${mySql.escape(req.query.date)}, ${mySql.escape(req.file.filename)}, ${mySql.escape('profile')})`;
    connect.query(InsertjustifyFiles, (err1, resultChange) => {
      if (err1) {
        console.log(err1);
      }
      console.log('resultChange', resultChange);
    });
    return res.status(200).send(req.file)

  })

});

app.post('/sendJustifs', function (req, res) {
  console.log('date', req.query.date);
  upload1(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    console.log('listfile', req.file);
    connect.connect((err1) => {
      if (err1) {
        console.log('err1');
      }
    });
    const InsertjustifyFiles = `INSERT INTO justiFiles (userID, date, img, typeFile) VALUES (${mySql.escape(req.query.id)}, ${mySql.escape(req.query.date)}, ${mySql.escape(req.file.filename)}, ${mySql.escape('noteDeFrais')})`;
    connect.query(InsertjustifyFiles, (err1, resultChange) => {
      if (err1) {
        console.log(err1);
      }
      console.log('resultChange', resultChange);
    });
    return res.status(200).send(req.file)
  })

})

app.post('/cra', (req, res) => {
  console.log('updateCra', req.body);
  const { tableDays, sommeCra, month, year, id } = req.body;

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const InsertCra = `INSERT INTO CRA (userID, Date, tableCra, somme) VALUES (${mySql.escape(id)}, ${mySql.escape(month + " " + year)}, ${mySql.escape(JSON.stringify(tableDays))}, ${mySql.escape(sommeCra)})`;
  connect.query(InsertCra, (err, resultCra) => {
    if (err) {
      console.log(err);

    }
    console.log(resultCra);

  })
});

app.post('/noteDeFrais', (req, res) => {
  console.log('updateNoteDeFrais', req.body);

  const { tableCosts, id } = req.body;
  let somme = 0;
  tableCosts.map((item) => {
    somme += item.Total
  })
  console.log(somme);

  connect.connect((err) => {
    if (err) {
      console.log('err');
    }
  });

  const InsertFrais = `INSERT INTO noteDeFrais (userID, tableFrais, somme) VALUES (${mySql.escape(id)}, ${mySql.escape(JSON.stringify(tableCosts))}, ${mySql.escape(somme)})`;
  connect.query(InsertFrais, (err, resultFrais) => {
    if (err) {
      console.log(err);

    }
    console.log(resultFrais);

  })
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

  app.post('/tableCra', (req, res) => {

    connect.connect((err) => {
      if (err) {
        console.log('err');
      }
    })
    const getTables = '    SELECT * FROM CRA;'
    connect.query(getTables, (err, resultGetTables) => {
      if (err) {
        console.log(err);

      }
      console.log(resultGetTables[2]);
      res.status(200).json(resultGetTables)
    })

  })

  app.post('/tableNoteDeFrais', (req, res) => {

    connect.connect((err) => {
      if (err) {
        console.log('err');
      }
    })
    const getTablesFrais = '    SELECT * FROM noteDeFrais;'
    connect.query(getTablesFrais, (err, resultGetTables) => {
      if (err) {
        console.log(err);

      }
      console.log(resultGetTables[2]);
      res.status(200).json(resultGetTables)


    })
  })

  app.post('/tableFiles', (req, res) => {

    connect.connect((err) => {
      if (err) {
        console.log('err');
      }
    })
  })

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
            }, jwtSecret);
            res.status(200).json({
              auth: true,
              tokenUser,
              result: resultSelectUser[0].userType,
              id: resultSelectUser[0].ID,
              nomProfile: resultSelectUser[0].Nom,
              prenomProfile: resultSelectUser[0].Prenom,
              identifiantProfile: resultSelectUser[0].Identifiant,
              typeProfile: resultSelectUser[0].userType,
              eMailProfile: resultSelectUser[0].eMail,
              telephoneProfile: resultSelectUser[0].Telephone
            });
          } else if (resultSelectUser[0].userType === 'Freelance') {
            const tokenUser = jwt.sign({
            }, jwtSecret);
            res.status(200).json({
              auth: true,
              tokenUser,
              result: resultSelectUser[0].userType,
              idProfile: resultSelectUser[0].ID,
              nomProfile: resultSelectUser[0].Nom,
              prenomProfile: resultSelectUser[0].Prenom,
              identifiantProfile: resultSelectUser[0].Identifiant,
              typeProfile: resultSelectUser[0].userType,
              eMailProfile: resultSelectUser[0].eMail,
              telephoneProfile: resultSelectUser[0].Telephone

            });
          } else {
            const tokenAdmin = jwt.sign({
            }, jwtSecret);
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

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../Front/public/index.html'));
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
