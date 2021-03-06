const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit',catchErrors(storeController.editStore))

router.get('/hello', (req, res) => {
  res.render('hello2', {title : 'elizabeth'})
})

router.get('/reverse/:string', (req, res) => {
  const reverse = [...req.params.string].reverse().join('');
  res.send(reverse);
})

module.exports = router;
