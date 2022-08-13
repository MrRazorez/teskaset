var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const path = req.protocol+'://'+req.headers.host+req.originalUrl+'videos/video.mp4';
  res.json({
    video: path
  });
});

module.exports = router;
