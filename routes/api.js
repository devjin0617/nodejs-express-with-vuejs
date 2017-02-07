var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
      success: true,
      text: 'index of node.js+express api router'
  });
});

router.all('*', (req, res, next) => {
    res.send({
        success: true,
        text: 'method is all in api router'
    })
});

module.exports = router;
