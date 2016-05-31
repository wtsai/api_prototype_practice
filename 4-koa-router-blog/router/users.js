"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();

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

router.get('/profile', function *() {
	this.body = 'profile page.';
});

router.get('/article/Add', function *() {
    this.body = 'article page.';
})

router.get('/article/modify/:ArticleId', function *() {
	this.body = 'article/modify page for ' + this.params.ArticleId + '.';
});

router.get('/article/comment/:ArticleId', function *() {
    this.body = 'comment page for ' + this.params.ArticleId + '.';
})
