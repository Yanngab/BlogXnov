var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	serie:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	},
	season:{
		type: String
	},
	episode:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	image_url:{
		type: String
	}
});
Article
var Article = module.exports = mongoose.model('Article', articleSchema);

// Get Articles
module.exports.getArticles = function(callback, limit){
	Article.find(callback).limit(limit);
}

// Get Article
module.exports.getArticleById = function(id, callback){
	Article.findById(id, callback);
}
// Add Article
module.exports.addArticle = function(article, callback){
	Article.create(article, callback);
}

// Update Article
module.exports.updateArticle = function(id, article, options, callback){
	var query = {_id: id};
	var update = {
		title: article.title,
		category: article.category,
		serie: article.serie,
		description: article.description,
		author: article.author,
		season: article.season,
		episode: article.episode,
		image_url: article.image_url

	}
	Article.findOneAndUpdate(query, update, options, callback);
}

// Delete Article
module.exports.removeArticle = function(id, callback){
	var query = {_id: id};
	Article.remove(query, callback);
}