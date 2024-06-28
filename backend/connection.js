//establishing connection to DB

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://richussherry02:Engineer@cluster0.cpla66r.mongodb.net/EmployeesDB?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB")
})
.catch((error)=>{
    console.log(error)
})