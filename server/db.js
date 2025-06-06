const express=require("express")
const mysql=require("mysql2")

const app=express()

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'shop',
    password:'',
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else(
        console.log("DATABASE------OK")
    )
})

module.exports=conn