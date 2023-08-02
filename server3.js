const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/login.html")
})

app.post('/endpoint', (req,res) =>{
    res.send("hello it's working")
})
app.listen('3000', () => {
    console.log("server is running on port 3000")
});