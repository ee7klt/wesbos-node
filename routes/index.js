const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// Do work here
router.get('/', storeController.myMiddleware, storeController.homePage);

router.get('/hello', (req, res) => {
  res.render('hello2', {title : 'elizabeth'})
})

router.get('/reverse/:string', (req, res) => {
  const reverse = [...req.params.string].reverse().join('');
  res.send(reverse);
})

module.exports = router;
