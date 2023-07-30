const mysql = require('mysql2');

// Set up database connection options
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce_db'
});

// Connect to database
dbConnection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database!');
});
