'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const database = require('./sqlConnection');

function createTablePeople(res) {
  var sql = "CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name VARCHAR(255), primary key(id))";
  return database.query(sql, (err, rows) => {
    if(err) {
      database.query();
      return res.status(500).send("Table Creation Failed");
    }
  });
}
function insertPeople(res) {

  var sql = "INSERT INTO people(name) VALUES ?";
  var values = [
    ['Anderson'],
    ['Lucian'],
    ['Wesley'],
    ['Alex']
  ];

  return database.query(sql, [values], (err) => {
    if (err) {
      database.query();
      return res.status(500).send("Insertion Failed");
    }
  });
}

function getPeople(res){
  var sql = "SELECT name FROM people";
  database.query(sql, function (error, result) {
    if (error) {
      database.query();
      return res.status(500).send("Search Failed");
    } else {
      database.query();
      res.send(`<h1>Full Cycle Rocks!</h1><br>` + Object.keys(result).map(function(k){return result[k].name}).join(","));
    }
  });
}

app.get('/', (req, res) => {
  createTablePeople(res);
  insertPeople(res);
  getPeople(res);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});