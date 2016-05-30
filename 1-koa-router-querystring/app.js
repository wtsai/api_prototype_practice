"use strict";

var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var route = new Router();

route.get('/test', function *() {
    console.log(this.query.name);
    console.log(this.query.email);
	this.body = this.query.name + ': ' + this.query.email;
});

app.use(route.middleware());

app.listen(3000);
