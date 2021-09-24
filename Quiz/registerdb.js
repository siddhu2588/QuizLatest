var mysql = require('mysql');

// create connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connection Established!");
});