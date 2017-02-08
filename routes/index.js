var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {

  var resultData = {
    url : 'http://localhost:8080/dist/build.js'
  };

  if (process.env.NODE_ENV === 'production') {
    resultData.url = '/dist/build.js';
  }
  res.render('index', {
    title: 'Express',
    result: resultData
  });
});

module.exports = router;
