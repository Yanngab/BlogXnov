const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Category =require('./models/category');
Serie =require('./models/serie');
Article =require('./models/article');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('home');
});

app.get('/categories', (req, res) => {
	Category.getCategories((err, categories) => {
		if(err){
			throw err;
		}
		res.json(categories);
	});
});

app.post('/categories', (req, res) => {
	var category = req.body;
	Category.addCategory(category, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.put('categories/:_id', (req, res) => {
	var id = req.params._id;
	var category = req.body;
	Category.updateCategory(id, category, {}, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.delete('/categories/:_id', (req, res) => {
	var id = req.params._id;
	Category.removeCategory(id, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.get('/series', (req, res) => {
	Serie.getSeries((err, series) => {
		if(err){
			throw err;
		}
		res.json(series);
	});
});

app.get('/series/:_id', (req, res) => {
	Serie.getSerieById(req.params._id, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.post('/series', (req, res) => {
	var serie = req.body;
	Serie.addSerie(serie, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.put('/series/:_id', (req, res) => {
	var id = req.params._id;
	var serie = req.body;
	Serie.updateSerie(id, serie, {}, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.delete('/series/:_id', (req, res) => {
	var id = req.params._id;
	Serie.removeSerie(id, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.get('/api/articles', (req, res) => {
	Article.getArticles((err, articles) => {
		if(err){
			throw err;
		}
		res.json(articles);
	});
});

app.get('/api/articles/:_id', (req, res) => {
	Article.getArticleById(req.params._id, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.post('/api/articles', (req, res) => {
	var article = req.body;
	Article.addArticle(article, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.put('/api/articles/:_id', (req, res) => {
	var id = req.params._id;
	var article = req.body;
	Article.updateArticle(id, article, {}, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.delete('/api/articles/:_id', (req, res) => {
	var id = req.params._id;
	Article.removeArticle(id, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.listen(3000);
console.log('Running on port 3000...');