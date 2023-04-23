import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0986929235",
  database: "social",
});

db.connect(function (err) {
  if (err) console.log("Connect DB failure");
  console.log("Connect DB success");
});
export default db;
