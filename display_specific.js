const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital_db'
});

connection.connect(function(err){
    connection.query("select pName, age,gender from patients ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("select eName, age from staffs ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("select dName,gender from doctors ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

module.exports=connection;