const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // need this for async/await
const slugs = require('slugs');  // url friendly names


const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String]
})
storeSchema.pre('save', function(next) {
  console.log('storeSchema.pre in Store.js')
  // 'this' keyword is the store we're trying to save
  if (!this.isModified('name')) {
    console.log('didnt run slug')
    next();
    return;    // if name not modified
              //then no need to run slug
  }
  this.slug = slugs(this.name);
  console.log('slug is ', this.slug)
  next()
  // TODO make more resiliant so slugs are unique
})

module.exports = mongoose.model('Store', storeSchema);
