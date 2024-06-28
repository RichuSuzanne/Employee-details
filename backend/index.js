//1.importing using require

var express = require('express');

//importing cors which is the policy used for connecting frontend and backend
var cors = require('cors');


const empModel = require('./model/employ')
require('./connection')


//2.initialization

var app = express();

// middleware
app.use(express.json());
app.use(cors()); 

//3.api
app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/path',(req,res)=>{
    res.send("login successfully completed")
})


//for adding values to the db via postman
app.post('/add',async(req,res)=>{
    
    try {
        console.log(req)
        await empModel(req.body).save()
        res.send({message:"data added successfull"})
    } catch (error) {
        console.log(error)
    }
})
//since cors is used , the response from postman can be mapped to backend via axios when the button is clicked in AddStudent of frontend

//for viewing values in db
app.get('/view',async(req,res)=>{
    try {
        const data = await empModel.find() //find is one of mongodb queries
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//to delete a user
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:'deleted'})
    } catch (error) {
        console.log(error)
    }
})

//to update user
app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await empModel.findByIdAndUpdate(req.params.id,req.body)//req.body is the updated value
        res.send({message:'updated',data})
    } catch (error) {
        console.log(error)
    }
})

//4.port allocation

app.listen(3000,()=>{
    console.log("port is up and running")
})