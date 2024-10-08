const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/list', (req, res) => {
  res.render('list');
});

router.get('/test', (req, res) => {
  res.render('test');
});

module.exports = router;