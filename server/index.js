
const express = require("express");


const app = express();


app.get('/', (req, res)=>{
    res.send("Hello from server");
})

app.use('/user', require('./routes/user'));
app.use('/product', require('./routes/product'));




app.listen(5000, ()=>{
    console.log("server started is port 5000");
})