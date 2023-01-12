'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const database = require('./sqlConnection');

app.get('/', (req, res) => {
  var sql = "CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name VARCHAR(255), primary key(id))";
  database.query(sql, (err, rows) => {
    if(err) return res.status(500).send("Table Creation Failed");
  });

  const sql_insert = "INSERT INTO people(name) VALUES ?";
  const values = [
    ['teste1'],
    ['teste1'],
    ['teste3'],
    ['teste4']
  ];

  database.query(sql_insert, [values], (err, rows) => {
      if (err) {
        return res.status(500).send("Insertion Failed");
      }
  });

  const sql_select = "SELECT name FROM people";
  database.query(sql_select, function (error, result, field) {
    if (error) {
      return res.status(500).send("Search Failed");
    } else {
      res.send(`<h1>Full Cycle Rocks!</h1><br>` + Object.keys(result).map(function(k){return result[k].name}).join(","));
    }
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});