const mysql = require("mysql");

function connectDB() {
    const connect = mysql.createConnection({
        host: process.env.DBHost || "localhost",
        user: process.env.DBUser || "root",
        password: process.env.DBPassword || ""
    });
    connect.connect((err) => {
        if (err) {
            throw err;
        }
        console.log("Connected to database");
    });
    return connect;
}

module.exports = connectDB();
