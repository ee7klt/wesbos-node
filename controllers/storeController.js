// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Wes';
//   res.cookie('name', 'chocolate chip', {maxAge:9999});
//   if (req.name === 'Wes') {
//     throw Error ('that is a stupid name')
//   }
//   next()
// }

const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}

exports.editStore = (req,res) => {
  res.render('editStore', {title: 'Add Store'})
}

exports.createStore = async (req, res) => {
  //res.json(req.body);
  const store = new Store(req.body);
  await store.save();
  console.log('it worked!');

}
