const mysql=require('mysql2');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital_db'
});

connection.connect(function(err){
connection.query("create table patients (pId int,pName varchar(25),age int, gender varchar(10))",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
connection.query("create table staffs (eId int,eName varchar(25),age int, gender varchar(10))",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
connection.query("create table doctors (dId int,dName varchar(25),age int, gender varchar(10))",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

module.exports=connection;
