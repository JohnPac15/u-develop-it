const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      //Your user name,
      user: "test",
      //Your MySQL password,
      password: "newpassword",
      database: "election",
    },
    console.log("Connected to the election database")
  );

  module.exports =db;