"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();
var Bloger = require('blog');

router.get('/', function *() {
	var text = 	yield Bloger.init();
	var articles = 	yield Bloger.articles();
	
	console.log(text);
	console.log(articles);
	
	this.body = articles;
});
