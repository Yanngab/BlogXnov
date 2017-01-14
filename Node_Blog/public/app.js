var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/articles', {
		controller:'ArticlesController',
		templateUrl: 'views/articles.html'
	})
	.when('/articles/details/:id',{
		controller:'ArticlesCommentsController',
		templateUrl: 'views/article_details.html'
	})
	.when('/articles/add',{
		controller:'ArticlesController',
		templateUrl: 'views/add_article.html'
	})
	.when('/articles/edit/:id',{
		controller:'ArticlesController',
		templateUrl: 'views/edit_article.html'
	})
	.when('/series', {
		controller:'SeriesController',
		templateUrl: 'views/series.html'
	})
	.when('/series/details/:id', {
		controller:'SeriesController',
		templateUrl: 'views/serie_details.html'
	})
	.when('/series/add', {
		controller:'SeriesController',
		templateUrl: 'views/add_serie.html'
	})
	.when('/series/edit/:id', {
		controller:'SeriesController',
		templateUrl: 'views/edit_serie.html'
	})
	.when('/categories', {
		controller:'CategoriesController',
		templateUrl: 'views/categories.html'
	})
	.when('/categories/details/:id', {
		controller:'CategoriesController',
		templateUrl: 'views/category_details.html'
	})
	.when('/categories/add', {
		controller:'CategoriesController',
		templateUrl: 'views/add_category.html'
	})
	.when('/categories/edit/:id', {
		controller:'CategoriesController',
		templateUrl: 'views/edit_category.html'
	})
	.when('/comments', {
		controller:'CommentsController',
		templateUrl: 'views/comments.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});