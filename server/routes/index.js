var express = require('express');
var router = express.Router();
var aes = require('crypto-js/aes');

/* GET home page. */
router.get('/', function(req, res, next) {
  const path = req.protocol+'://'+req.headers.host+req.originalUrl+'videos/video.mp4';
  res.json({
    video: aes.encrypt(path, "test123").toString()
  });
});

module.exports = router;
