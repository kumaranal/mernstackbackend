const mongoose=require('mongoose')

let todoSchema= new mongoose.Schema({
    name: {
        type:String,
        // require:true
    },
    username: {
        type:String
    },
    password: {
        type: String
    }
},
{
    collection:"ToDo"
}
)
// ToDo is the table name

module.exports=mongoose.model("ToDo",todoSchema)