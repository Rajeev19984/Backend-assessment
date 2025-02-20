var express = require('express');
var router = express.Router();
var pool=require('./pool');

/* owner&managerdetail API */

router.get('/fetchownerandmanagerdetail', function(req, res, next) {
  pool.query("select * from ownerandmanagerdetail",function(err,result){
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
