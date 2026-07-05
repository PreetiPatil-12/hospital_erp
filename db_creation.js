const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    
});

connection.connect(function(err){
    connection.query("CREATE DATABASE hospital_db",function(err,result){
        if(err) throw err;
        console.log(result);
    });
});
 
module.exports=connection;