const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'nodemysql'
});

//connection with mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connect");
});
const app = express();

//creat database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("database created");
  });
});

//create table in sql
app.get('/employee' ,(req,res)=>{
    let sql = 'CREATE TABLE employee (id int AUTO_INCREMENT , name VARCHAR(300) , discription VARCHAR(500), PRIMARY KEY(id))'
    db.query(sql , (err)=>{
    if(err){
        throw err
    }
    res.send('table employee is created');
    });
});

//insert in table
app.get('/employee1',(req,res)=>{
    const post = {name : 'alaa', discription : 'dfirifiiduritrto eruit0 rtiew9'}
    const sql = 'INSERT INTO employee SET ?';
    db.query(sql ,post , err=>{
        if(err){
            throw err
        }
        res.send('emplyee add')
    })
})

//select from table
app.get('/getemployee',(req,res)=>{
    const sql = 'SELECT * FROM employee'
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('select employee')
    })
})

//updata in table
app.get('/updateemployee/:id',(req,res)=>{
    let newName = 'Update Name';
    const sql = `UPDATE employee SET name = '${newName}' WHERE id=${req.params.id}`
    db.query(sql , err=>{
        if(err){
            throw err
        }
        res.send('update employee')
    })
})

//delete from table
app.get('/deleteemployee/:id',(req,res)=>{
    const sql = `DELETE FROM employee WHERE id=${req.params.id}`
    db.query(sql , err=>{
        throw err
    })
    res.send('delet employee')
})

//port to listen
app.listen("3500", () => {
  console.log("server run in port 3500");
});
