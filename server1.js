const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: true
    },
    lname:{
        type:String,
        require: true
    },
    email: {
      type: String,
      required: true,
    },
  });
  
const User = mongoose.model('User', userSchema);
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signin.html")
    });
app.use(bodyParser.urlencoded({extended:true}))
app.post("/", (req, res) =>{
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.emailid
    const password = req.body.password
    const newUser = new User({
        fname: fname,
        lname:  lname,
        email: email,
    });
        newUser.save()
    .then((savedUser) => {
        console.log('New user created:', savedUser);
    })
    .catch((error) => {
        console.error('Error creating user:', error);
    });
        console.log(fname, lname, email, password)
    res.send("hey")

});

app.listen(3001, () => {
    console.log('listening on port 3001')
})  