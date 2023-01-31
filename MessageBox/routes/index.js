var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit-form', function(req,res){
  const sn = req.body.senderName;
  const m = req.body.message;
  let message = `Sent by: ${sn}
  Message : ${m}`;
  fs.writeFile(path.join(__dirname , "../message.txt"),message, function(err){
    if (err){
      console.log(err)
      return;
    }
    res.render(`Submitted`)
  })
})

module.exports = router;
