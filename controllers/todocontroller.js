const { validationResult } = require("express-validator")
const ToDoModel=require("../models/todomodel")

module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
    console.log("req",req.body);
    const { name }= req.body
    ToDoModel
        .create({name})
        .then((data) => {
            console.log("Added Successfully");
            console.log(data);
            res.send(data)
        })
        .catch((err) => console.log(err))


}

module.exports.updateToDo = async (req, res) => {
    console.log("req",req.body);
    const { _id, name }= req.body
    ToDoModel
        .findByIdAndUpdate(_id,{name})
        .then(() => res.send("update Successfully..."))
        .catch((err) => console.log(err))

}
module.exports.deleteToDo = async (req, res) => {
    console.log("req",req.body);
    const { _id, name }= req.body
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("delete Successfully..."))
        .catch((err) => console.log(err))

}

module.exports.loginfn=async (req,res)=>{
    res.send("login")
}

module.exports.registerfn=async (req,res)=>{


    // const errors=validationResult(req);
    res.send(errors)
}