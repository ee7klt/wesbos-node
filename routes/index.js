const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.editStore);
router.post('/add', catchErrors(storeController.createStore));


router.get('/hello', (req, res) => {
  res.render('hello2', {title : 'elizabeth'})
})

router.get('/reverse/:string', (req, res) => {
  const reverse = [...req.params.string].reverse().join('');
  res.send(reverse);
})

module.exports = router;
