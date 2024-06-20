
const express = require("express");


const app = express();


app.get('/', (req, res)=>{
    console.log("Hello from server");
})


app.listen(5000, ()=>{
    console.log("server started is port 5000");
})