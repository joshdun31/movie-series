const express=require('express')
const router=express.Router()
const axios=require('axios')
const collection=require('../utilities/connection')
const torrentSearch = require('torrent-search-api');
// const torrentSearch = new TorrentSearchApi(); 
torrentSearch.enablePublicProviders();


router.get('/movie/:title',async(req,res)=>{
    try {
        let {title}=req.params
        let response=await axios.get(`http://www.omdbapi.com/?apikey=f4b4892f&i=${title}&plot=full`)
        return res.json(response.data)   
    } catch (error) {
        return res.json({'message':error.message})
    }
})
router.get('/search/:title/:page',async(req,res)=>{
    try {
        let {title,page}=req.params
        let response=await axios.get(`http://www.omdbapi.com/?apikey=f4b4892f&s=${title}&page=${page}`)
        let model=await collection.getCollection()
        let result=await model.insertMany([{'keyword':title}])
        return res.json(response.data)
        
    } catch (error) {
        return res.json({'message':error.message})
    }
})

router.get('/torrent',async(req,res)=>{
    try {
        
        let result=await torrentSearch.search([],'shutter','Movies',5)
        res.json({"result":result})
    } catch (error) {
        console.log(error)
        return res.json({'message':error.message})
    }
})

module.exports=router