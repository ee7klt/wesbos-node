const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // need this for async/await
const slugs = require('slugs');  // url friendly names


const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slugs: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String]
})
storeSchema.pre('save', function(next) {
  // 'this' keyword is the store we're trying to save
  if (!this.isModified('name')) {
    next();
    return;    // if name not modified
              //then no need to run slug
  }
  this.slug = slugs(this.name);
  next()
  // TODO make more resiliant so slugs are unique
})

module.exports = mongoose.model('Store', storeSchema);
