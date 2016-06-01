"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('blog');

router.get('/', function *() {
	var blog = new Bloger();
	
	var text = 	yield function(done) {
		blog.init(done);
	};
	
	var articles = 	yield function(done) {
		blog.articles(done);
	};
	
	console.log(text);
	console.log(articles);
	
	this.body = articles;
});
