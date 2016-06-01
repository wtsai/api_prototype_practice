"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('../lib/blog');

router.post('/users/login', function *() {
	var blog = new Bloger();
	
	var login = yield function(done) {
		blog.login(done);
	};
	this.body = login;
})

router.post('/articles', function *() {
	var blog = new Bloger();
	
	var AddArticle = yield function(done) {
		blog.AddArticle(done);
	};
	this.body = AddArticle;
})

router.put('/articles/:ArticleId', function *() {
	var blog = new Bloger();
	
	var UpdateArticle = yield function(done) {
		blog.UpdateArticle(this.params.ArticleId, done);
	};
	this.body = UpdateArticle + ' for ' + this.params.ArticleId + '.';
});

router.delete('/articles/:ArticleId', function *() {
	var blog = new Bloger();
	
	var DeleteArticle = yield function(done) {
		blog.DeleteArticle(this.params.ArticleId, done);
	};
	this.body = DeleteArticle + ' for ' + this.params.ArticleId + '.';
});

router.post('/articles/comment/:ArticleId', function *() {
	var blog = new Bloger();
	
	var AddComment = yield function(done) {
		blog.AddComment(this.params.ArticleId, done);
	};
	this.body = AddComment + ' for article ID ' + this.params.ArticleId + '.';
});

