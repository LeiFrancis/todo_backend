let express = require('express');
let router = express.Router();
let con = require('../models/notes');

/* GET home page. */

router.get('/', function (req, res, next) {
  con.keys().then(function(val){
    return res.json(val);
    /*res.render('index.ejs', {
      title: 'Note',
      keys: val
    })*/
  });
});


/*router.get('/', function (req, res, next) {
  
});

/*notes.keys().then(function(res){
  console.log(res);
});*/

module.exports = router;
