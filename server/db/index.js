var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
exports.connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'student',
  password : 'student',
  database : 'chat'
});



//this file is to connect with the database schema.sql and transport it to the models maybe 
// possible connect to orm module here

// server/db/index.js uses the mysql npm module to 
// connect to the database server running on your computer