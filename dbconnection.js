const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/machinetest")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})

module.exports=db