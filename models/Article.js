// DEPENDENCIES
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Create Article Schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Create Article Model
var Article = mongoose.model('Article', ArticleSchema);
// Export the Model
module.exports = Article;