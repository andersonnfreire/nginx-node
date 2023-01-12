
const mysql = require("mysql");

const config = {
    host:'db',
    user: 'root',
    password:'root',
    database:'nodedb'
  };

let db_con  = mysql.createConnection(config);
  
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});
  
module.exports = db_con;