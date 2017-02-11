var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var db = require('./models');

let User = db.User;

app.post('/users', (req, res) => {
    User.create({username: req.body.username})
    .then((user) => {
        res.json(user);
    });
});

app.get('/users', (req, res) => {
    User.findAll()
    .then((users) => {
        res.json(users);
    });
});

app.listen(3000, function() {
  db.sequelize.sync();
});