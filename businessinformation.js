var express = require('express');
var router = express.Router();
var pool=require('./pool');

/* Businessinformation API */

router.get('/fetchbusinessinformation', function(req, res, next) {
  pool.query("select * from businessinformation",function(err,result){
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
