const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const path=require('path')

const PORT=process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use('/',require('./routes/movie'))

if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }

app.listen(PORT,()=>{
    console.log('Server is listening at port 5000!');
})