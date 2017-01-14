var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	author:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	id_author:{
		type: String
	},
	id_article:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Comment = module.exports = mongoose.model('Comment', commentSchema);

// Get Comments
module.exports.getComments = function(callback, limit){
	Comment.find(callback).limit(limit);
}

// Add Comment
module.exports.addComment = function(comment, callback){
	Comment.create(comment, callback);
}

// Update Comment
module.exports.updateComment = function(id, comment, options, callback){
	var query = {_id: id};
	var update = {
		name: comment.name,
		description: comment.description,
		create_date: comment.create_date
	}
	Comment.findOneAndUpdate(query, update, options, callback);
}

// Delete Comment
module.exports.removeComment = function(id, callback){
	var query = {_id: id};
	Comment.remove(query, callback);
}