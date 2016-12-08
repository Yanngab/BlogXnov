var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ArticlesController',
		templateUrl: 'views/articles.html'
	})
	.when('/articles', {
		controller:'ArticlesController',
		templateUrl: 'views/articles.html'
	})
	.when('/articles/details/:id',{
		controller:'ArticlesController',
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
	.otherwise({
		redirectTo: '/'
	});
});