const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const alex = {name: 'alex'}
  res.json(req.query)
});

router.get('/hello', (req, res) => {
  res.render('hello2', {title : 'elizabeth'})
})

router.get('/reverse/:string', (req, res) => {
  const reverse = [...req.params.string].reverse().join('');
  res.send(reverse);
})

module.exports = router;
