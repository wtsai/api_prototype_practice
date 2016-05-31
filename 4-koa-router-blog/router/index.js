"use strict";

var Router = require('koa-router');
var router = module.exports = new Router();

router.get('/', function *() {
	this.body = 'Home page.';
});
