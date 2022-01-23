const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'seene3',
  // Your MySQL password
  password: '1333',
  database: 'election'
});

module.exports = db;