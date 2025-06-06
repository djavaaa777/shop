const express=require('express')
const conn=require('./db')
const cors = require('cors')
const app=express()

app.use(cors())
app.use(express.json())
require("dotenv").config();


app.post("/contact",(req,res)=>{
    const{name,email,message}=req.body
    const query=`INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`
    const values=[name,email,message]
    conn.query(query,values,(err)=>{
        if(err){
            console.log(err)
            return res.status(500).json({ success: false, message: "Database error" })
        }
        else{
            console.log('Success')
            return res.status(200).json({ success: true, message: "Message received!" })
        }
    })
})

app.post("/ordered",(req,res)=>{
    const {items,total}=req.body
    const query=`INSERT INTO orders (items, total) VALUES (?, ?)`
    const values=[JSON.stringify(items),total]
    if (!items || !total) {
        return res.status(400).json({ success: false, message: "Invalid order data" });
    }
    conn.query(query,values,(err)=>{
        if(err){
            console.log(err)
            return res.status(500).json({ success: false, message: "Database error" })
        }
        else{
            console.log('Success')
            return res.status(200).json({ success: true, message: "Ordered received!" })
        }
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
