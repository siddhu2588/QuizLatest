function validate(){
    var name = f1.t1.value;
    var contact = f1.t2.value;
    var email = f1.t3.value;
    var username = f1.t4.value;
    var password = f1.t5.value;

    

    if(name ==" " || name.length==0){
        alert("Name field cannot be empty");
        return false;
    }

    if(contact.length!=10){
        alert("Invalid Contact Number");
        return false;
    }

    if(email.length==0){
        alert("Email field cannot be empty");
    }
}


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
