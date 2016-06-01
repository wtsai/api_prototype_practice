"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('blog');

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
	var articles = yield Bloger.GetArticles();
	this.body = articles;
});

router.get('/article/', function *() {
	this.body = 'Add article by user.';
})

router.get('/article/modify/:ArticleId', function *() {
	var article = yield Bloger.GetArticle(this.params.ArticleId);
	this.body = article + ' ' +this.params.ArticleId + ' by user.';
});

router.get('/article/comment/:ArticleId', function *() {
	var article = 	yield Bloger.GetArticle(this.params.ArticleId);
	var Comments = 	yield Bloger.Comments(this.params.ArticleId);
	
	this.body = article + '\n and \n' + Comments;
})
