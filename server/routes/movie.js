const express=require('express')
const router=express.Router()
const axios=require('axios')
const collection=require('../utilities/connection')
const TorrentSearchApi = require('torrent-search-api');
// const torrentSearch = new TorrentSearchApi(); 
TorrentSearchApi.enablePublicProviders()


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

router.get('/torrent/movie/:query',async(req,res)=>{
    try {
        let result=await TorrentSearchApi.search(['1337x','Eztv','KickassTorrents','Limetorrents','Rarbg','ThePirateBay','Torrent9','TorrentProject','Torrentz2','Yts'],req.params.query,'Movies',100)
        res.json({"result":result,total_results:result.length})
    } catch (error) {
        console.log(error)
        return res.json({'message':error.message})
    }
})

router.get('/torrent/tv/:query',async(req,res)=>{
    try {
        let result=await TorrentSearchApi.search(['1337x','Eztv','KickassTorrents','Limetorrents','Rarbg','ThePirateBay','Torrent9','TorrentProject','Torrentz2','Yts'],req.params.query,'TV',100)
        res.json({"result":result,total_results:result.length})
    } catch (error) {
        console.log(error)
        return res.json({'message':error.message})
    }
})

router.get('/torrent/all/:query',async(req,res)=>{
    try {
        let result=await TorrentSearchApi.search(['1337x','Eztv','KickassTorrents','Limetorrents','Rarbg','ThePirateBay','Torrent9','TorrentProject','Torrentz2','Yts'],req.params.query,'All',500)
        res.json({"result":result,total_results:result.length})
    } catch (error) {
        console.log(error)
        return res.json({'message':error.message})
    }
})

module.exports=router
