"use strict";

var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var route = new Router();

route.get('/', function *() {
	this.body = 'Home page.';
});

route.get('/user/', function *() {
	this.body = 'user page.';
});

route.post('/user/', function *() {
	this.body = 'Create User.';
});

route.put('/user/:id', function *() {
	this.body = 'Update User info.';
});

route.del('/user/:id', function *() {
	this.body = 'Delete User.';
});

app.use(route.middleware());

app.listen(3000);
