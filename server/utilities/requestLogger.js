const fs=require('fs')

const requestHandler=(err,req,res,next)=>{
    if(err){
        fs.appendFile('requestLogger.txt',`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}  Method:${req.method}  URL:${req.url} \n`,(err)=>{
            if(err){
                console.log("Error in appending file")
            }
        })
        console.log("Error "+err.message)
    }
    next()
}
module.exports=requestHandler;