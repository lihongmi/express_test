var express = require('express');
var router = express.Router();
var markdown = require('markdown').markdown;
var markdownjs = require('markdown-js');
var marked = require('marked');
let markdowner = require('markdown-it');
/* GET article listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id',function(req, res, next) {

  var id=req.params.id;

  var  mdContent='[师徒课堂11](http://www.shitu91.com "Click")';
  
  //var  htmlContent=markdown.toHTML(mdContent);
  //var  htmlContent=marked(mdContent);
  //var  htmlContent=markdownjs.makeHtml(mdContent);

  var md = new markdowner({
    html: true,
    prefix: 'code-',
  });
  var htmlContent = md.render(mdContent||'');
	
  res.render("detail",{title:id,htmlContent:htmlContent});
});

module.exports = router;
