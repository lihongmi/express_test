var express = require('express');
var router = express.Router();

function renzhen(req, res, next) {

  res.locals.yourname="redrice";

  next();
}
/* GET home page. */
router.get('/', renzhen,function(req, res, next) {

  var userName=req.session.userName;
  res.render('index', { title: 'Express',userName:userName });
});

router.get('/sessions',function(req,res,next){
	 if (req.session.views) {
	    req.session.views++
	    res.setHeader('Content-Type', 'text/html')
	    res.write('<p>views: ' + req.session.views + '</p>')
	    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
	    res.end()
	  } else {
	    req.session.views = 1
	    res.end('welcome to the session demo. refresh!')
	  }
});

module.exports = router;
