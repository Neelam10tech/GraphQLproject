const mysql = require("mysql")

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"Nilam1029@",
    database:"users"
})

con.connect((err) =>{
    if(err){
        console.log("error")
    }else{
        console.log("connect")
    }
})