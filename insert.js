const mysql=require('mysql2');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital_db'
});

connection.connect(function(err){
connection.query("insert into patients values (01,'siddu',24,'M'),(02,'sai',17,'M'),(03,'suhani',24,'F'),(04,'rohan',28,'M')",function(err,result,fields){
        if(err) throw err;
        console.log(result);
});
});

connection.connect(function(err){
connection.query("insert into staffs values (01,'suresh',28,'M'),(02,'raju',34,'M'),(03,'rekha',32,'F'),(04,'rahul',24,'M')",function(err,result,fields){
        if(err) throw err;
        console.log(result);
});
});

connection.connect(function(err){
connection.query("insert into doctors values (01,'Dr. Sneha',32,'F'),(02,'Dr. Hari',34,'M'),(03,'Dr. Suhas',42,'M'),(04,'Dr. Swathi',39,'F')",function(err,result,fields){
        if(err) throw err;
        console.log(result);
});
});

module.exports=connection;