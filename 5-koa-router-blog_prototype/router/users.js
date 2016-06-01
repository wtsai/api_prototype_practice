"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('../lib/blog');

router.get('/register', function *() {
	this.body = 'register page.';
});

router.get('/signin', function *() {
    this.body = 'signin page.';
})

router.get('/signout', function *() {
	this.body = 'signout page.';
});

router.get('/forget', function *() {
    this.body = 'forget page.';
})

router.get('/profile/', function *() {
	var blog = new Bloger();
	
	var articles = yield function(done) {
		blog.GetArticles(done);
	};
	this.body = articles;
});

router.get('/article/', function *() {
	this.body = 'Add article by user.';
})

router.get('/article/modify/:ArticleId', function *() {
	var blog = new Bloger();
	
	var article = yield function(done) {
		blog.GetArticle(this.params.ArticleId, done);
	};
	this.body = article + ' ' +this.params.ArticleId + ' by user.';
});

router.get('/article/comment/:ArticleId', function *() {
	var blog = new Bloger();
	
	var article = 	yield function(done) {
		blog.GetArticle(this.params.ArticleId, done);
	};
	var Comments = 	yield function(done) {
		blog.Comments(this.params.ArticleId, done);
	};
	
	this.body = article + '\n and \n' + Comments;
})
