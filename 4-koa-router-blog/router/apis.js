"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();

router.post('/users/login', function *() {
	this.body = 'login.';
})

router.post('/articles', function *() {
	this.body = 'Add a new article.';
})

router.put('/articles/:ArticleId', function *() {
    console.log(this.request.body);
	this.body = 'Update one article for ' + this.params.ArticleId + '.';
});

router.delete('/articles/:ArticleId', function *() {
	this.body = 'Delete one article for ' + this.params.ArticleId + '.';
});

router.post('/articles/comment/:ArticleId', function *() {
	this.body = 'Add one new comment for article ID ' + this.params.ArticleId + '.';
});
