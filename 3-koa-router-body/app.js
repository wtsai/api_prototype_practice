"use strict";

var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

var app = koa();
var route = new Router();

app.use(bodyParser());

route.post('/test', function *() {
    console.log(this.request.body);

    this.body = JSON.stringify(this.request.body);
})

app.use(route.middleware());

app.listen(3000);
