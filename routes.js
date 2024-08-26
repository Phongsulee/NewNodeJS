const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/list', (req, res) => {
  res.render('list');
});

module.exports = router;