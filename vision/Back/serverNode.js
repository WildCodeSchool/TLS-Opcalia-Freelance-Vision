const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const port = 4000;


var app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/login", function (req, res) {
    const notId = () => { res.status(200).json("badID"); }
    const badPass = () => { res.status(200).json("badPass"); }
    const goodPass = () => { res.status(200).json("passOk"); }

    var identifiant = req.body.id;
    var password = req.body.pass;
    console.log("/login");
    console.log(req.body);

    let connect = mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "Serval7*",
        database: "FreelanceVision"
    })
    connect.connect(function (err) {
        if (err) {
            console.log("err");

        }
    })

    const sql = `SELECT COUNT(*) FROM salariés WHERE identifiant = ` + mySql.escape(identifiant);
    connect.query(sql, function (err, result) {
        console.log(result);
        var idPresent = JSON.stringify(result).indexOf(1);
        console.log(idPresent);
        if (idPresent > 0) {
            const sql = `SELECT * FROM salariés WHERE identifiant = ` + mySql.escape(identifiant);
            connect.query(sql, function (err, result) {
                if (err) {
                    console.log(err);

                }
                if (result[0].Pass === password) {
                    goodPass();

                }
                else {
                    badPass();

                }
                console.log(result[0].Pass);

            })
        }
        else {
            notId()

        }
    })


})











app.listen(port, function () {
    console.log(`server started on ${port}`);

})