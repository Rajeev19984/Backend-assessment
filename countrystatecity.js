var express = require('express');
var router = express.Router();
var pool=require('./pool');


/* GET home page. */
router.get('/fetchcountry', function(req, res, next) {
  pool.query("select * from country",function(err,result){
    if(err)
        {
     res.status(500).json([])
    }

    else
    {
    res.status(200).json([result])
    }
  })
});

router.get('/fetchstate', function(req, res, next) {
  pool.query("select * from state",function(err,result){
    if(err)
        {
     res.status(500).json([])
    }

    else
    {
    res.status(200).json([result])
    }
  })
});


router.post('/fetchcity', function(req, res, next) {
  pool.query("select * from city where stateid=?",[req.body.stateid],function(err,result){
    if(err)
        {
     res.status(500).json([])
    }

    else
    {
    res.status(200).json([result])
    }
  })
});

module.exports = router;
