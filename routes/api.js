var express = require('express');
var router = express.Router();

const ScheduleController = require('../controllers/ScheduleController.js');

/* GET users listing. */
router.get('/schedule', ScheduleController.index);


router.get('/schedule/:id', function(req, res, next) {
  res.send('API !!!');
});


router.post('/schedule', function(req, res, next) {
  res.send('API !!!');
});

router.put('/schedule/:id', function(req, res, next) {
  res.send('API !!!');
});

router.delete('/schedule/:id', function(req, res, next) {
  res.send('API !!!');
});

module.exports = router;
