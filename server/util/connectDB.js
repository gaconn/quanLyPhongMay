const mysql = require("mysql");

function connectDB() {
    const connect = mysql.createConnection({
        host: process.env.DBHost || "localhost",
        user: process.env.DBUser || "root",
        password: process.env.DBPassword || "",
        database: process.env.DBName
    });
    if (connect) {
        console.log("connected to database");
    } else {
        console.log("cannot connect to database");
    }
    return connect;
}

module.exports = connectDB();
