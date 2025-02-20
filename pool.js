var mysql=require("mysql")
var pool=mysql.createPool(
    { host:'localhost',
     port:3307,
     user:'root',
     password:'1234',
     database:'backend_task',
     connectionLimit:100,
     multiplestatement:true})

     module.exports=pool





