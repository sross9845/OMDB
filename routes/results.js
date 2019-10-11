const express = require('express');

const router = express.Router();

//GET route shows array of results
router.get('/', function(req,res){
    res.send('showing results')
})
//GET /:omdbid shows deets of one movie
router.get('/:omdbid', function(req,res){
    res.send('showing specific results of ' + req.params.omdbid)
})

module.exports = router;