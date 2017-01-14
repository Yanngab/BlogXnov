var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get Categories
module.exports.getCategories = function(callback, limit){
	Category.find(callback).limit(limit);
}

// Add Category
module.exports.addCategory = function(category, callback){
	Category.create(category, callback);
}

// Update Category
module.exports.updateCategory = function(id, category, options, callback){
	var query = {_id: id};
	var update = {
		name: category.name,
		image_url: category.image_url
	}
	Category.findOneAndUpdate(query, update, options, callback);
}

// Delete Category
module.exports.removeCategory = function(id, callback){
	var query = {_id: id};
	Category.remove(query, callback);
}