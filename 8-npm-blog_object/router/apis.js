"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('blog');

router.post('/users/login', function *() {
	var login = yield Bloger.login();
	this.body = login;
})

router.post('/articles', function *() {
	var AddArticle = yield Bloger.AddArticle();
	this.body = AddArticle;
})

router.put('/articles/:ArticleId', function *() {
	var UpdateArticle = yield Bloger.UpdateArticle(this.params.ArticleId);
	this.body = UpdateArticle + ' for ' + this.params.ArticleId + '.';
});

router.delete('/articles/:ArticleId', function *() {
	var DeleteArticle = yield Bloger.DeleteArticle(this.params.ArticleId);
	this.body = DeleteArticle + ' for ' + this.params.ArticleId + '.';
});

router.post('/articles/comment/:ArticleId', function *() {
	var AddComment = yield Bloger.AddComment(this.params.ArticleId);
	this.body = AddComment + ' for article ID ' + this.params.ArticleId + '.';
});

