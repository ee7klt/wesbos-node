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
  req.flash('success','success')
  req.flash('error','error')
  req.flash('info','info')
  req.flash('warning','warning')
  res.render('index');
}

exports.addStore = (req,res) => {
  res.render('editStore', {title: 'Add Store'})
}

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  //await store.save();
  req.flash('success', `Successfully created ${store.name}. Care to leave a review?`)
  res.redirect(`/store/${store.slug}`);
  //res.redirect('/');
}

exports.getStores = async (req, res) => {
  const stores = await Store.find(); // returns a promise
  console.log(stores)
  res.render('stores', {title: 'Stores', stores});
}

exports.editStore = async(req, res) => {
  const id = req.params.id;
  const store = await Store.findById(id);
  res.render('editStore', {title: `edit ${store.name}`, store})
}

exports.updateStore = async(req, res) => {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body);
    req.flash('success', `Successfully updated ${store.name}.`)
    res.redirect(`/stores/`);
}
