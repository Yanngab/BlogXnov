var mongoose = require('mongoose');

var serieSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	time:{
		type: String,
		required: true
	},
	author:{
		type: String
	},
	seasons:{
		type: String
	},
	episodes:{
		type: String
	},
	description:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	image_url:{
		type: String
	},
	year:{
		type: Date
	}
});

var Serie = module.exports = mongoose.model('Serie', serieSchema);

// Get Series
module.exports.getSeries = function(callback, limit){
	Serie.find(callback).limit(limit);
}

// Get Serie
module.exports.getSerieById = function(id, callback){
	Serie.findById(id, callback);
}

// Add Serie
module.exports.addSerie = function(serie, callback){
	Serie.create(serie, callback);
}

// Update Serie
module.exports.updateSerie = function(id, serie, options, callback){
	var query = {_id: id};
	var update = {
		title: serie.title,
		category: serie.category,
		time: serie.time,
		author: serie.author,
		seasons: serie.seasons,
		episodes: serie.episodes,
		image_url: serie.image_url,
		description: serie.description,
		year: serie.year

	}
	Serie.findOneAndUpdate(query, update, options, callback);
}

// Delete Serie
module.exports.removeSerie = function(id, callback){
	var query = {_id: id};
	Serie.remove(query, callback);
}