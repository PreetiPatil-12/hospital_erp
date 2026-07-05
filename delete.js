const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital_db'
});

connection.connect(function(err){
    connection.query("delete from patients where pId=4 ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("delete from staffs where eId=4 ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("delete from doctors where dName='Dr. Suhas' ",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

module.exports=connection;