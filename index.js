const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors())
app.use(express.json());


app.get('/getusers', (req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        res.json(err)
    })
})

app.post('/createuser',async(req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save();
    res.json(user);
})



mongoose.connect('mongodb+srv://paulapu:o7Tlcwx6E2azBjA0@cluster0.d6ip0dv.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0')
app.listen(3001,()=>{
    console.log('Server is running');
})

