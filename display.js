const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital_db'
});

connection.connect(function(err){
    connection.query("select * from patients",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("select * from staffs",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("select * from doctors",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

module.exports=connection;