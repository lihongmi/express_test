var express = require('express');
var multer  = require('multer');

var router = express.Router();


var storage = multer.diskStorage({
 //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
   }, 
 //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});  
//var upload = multer({ dest: './public/uploads/' })
var upload = multer({
    storage: storage,
    limits:{}
});



router.get('/post_img', function(req, res, next) {
  res.render("post_img");
});

//router.post('/post_img1',  upload.single('avatar'),function(req, res, next) {
//router.post('/post_img1',  upload.array('avatar',3),function(req, res, next) {
router.post('/post_img1', upload.fields([{ name: 'avatar', maxCount: 2}, { name: 'avatar1', maxCount: 1 }]),function(req, res, next) {
  //res.send(req.file);
  res.end("upload success!");
});

router.get('/login', function(req, res, next) {
  res.render("login");
});


router.post('/login', function(req, res, next) {

  
  
  req.session.userName=req.body.userName

  res.redirect("/");
});
module.exports = router;

