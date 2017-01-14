const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

Category =require('./models/category');
Serie =require('./models/serie');
Article =require('./models/article');
Comment =require('./models/comment');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('home');
});

app.get('/api/categories', (req, res) => {
	Category.getCategories((err, categories) => {
		if(err){
			throw err;
		}
		res.json(categories);
	});
});

app.post('/api/categories', (req, res) => {
	var category = req.body;
	Category.addCategory(category, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.put('/api/categories/:_id', (req, res) => {
	var id = req.params._id;
	var category = req.body;
	Category.updateCategory(id, category, {}, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.delete('/api/categories/:_id', (req, res) => {
	var id = req.params._id;
	Category.removeCategory(id, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.get('/api/series', (req, res) => {
	Serie.getSeries((err, series) => {
		if(err){
			throw err;
		}
		res.json(series);
	});
});

app.get('/api/series/:_id', (req, res) => {
	Serie.getSerieById(req.params._id, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.post('/api/series', (req, res) => {
	var serie = req.body;
	Serie.addSerie(serie, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.put('/api/series/:_id', (req, res) => {
	var id = req.params._id;
	var serie = req.body;
	Serie.updateSerie(id, serie, {}, (err, serie) => {
		if(err){
			throw err;
		}
		res.json(serie);
	});
});

app.delete('/api/series/:_id', (req, res) => {
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

app.get('/api/comments', (req, res) => {
	Comment.getComments((err, comments) => {
		if(err){
			throw err;
		}
		res.json(comments);
	});
});

app.post('/api/comments', (req, res) => {
	var comment = req.body;
	Comment.addComment(comment, (err, comment) => {
		if(err){
			throw err;
		}
		res.json(comment);
	});
});

app.put('/api/comments/:_id', (req, res) => {
	var id = req.params._id;
	var comment = req.body;
	Comment.updateComment(id, comment, {}, (err, comment) => {
		if(err){
			throw err;
		}
		res.json(comment);
	});
});

app.delete('/api/comments/:_id', (req, res) => {
	var id = req.params._id;
	Comment.removeComment(id, (err, comment) => {
		if(err){
			throw err;
		}
		res.json(comment);
	});
});

app.listen(3000);
console.log('Running on port 3000...');