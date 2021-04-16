const mongoose=require('mongoose')
mongoose.Promise=global.Promise

const Schema=mongoose.Schema
let url='mongodb+srv://nareshe64:HueNJ6NIUFCPGcA6@cluster0.eg2nu.mongodb.net/movierseries?retryWrites=true&w=majority'
let search={
    "keyword":{
        type:String,
        required:true
    }
}

let searchSchema=new Schema(search,{collection:"Search",timestamps:true})
let collection={}
collection.getCollection= async()=>{
    try {
        return (await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})).model("Searcg",searchSchema)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}
module.exports=collection