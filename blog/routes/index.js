var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var userName=req.session.userName;
  res.render('index', { title: 'Express',userName:userName });
});

module.exports = router;
