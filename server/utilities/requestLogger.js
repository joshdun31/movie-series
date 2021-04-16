const fs=require('fs')

const requestHandler=(req,res,next)=>{
        fs.appendFile('requestLogger.txt',`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}  Method:${req.method}  URL:${req.url} \n`,(err)=>{
            if(err){
                console.log("Error in appending file")
            }
            next()
        })

    
}
module.exports=requestHandler;