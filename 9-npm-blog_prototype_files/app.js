"use strict";

var koa = require('koa');
var Router = require('koa-router');
var index = require('./router/index');
var apis = require('./router/apis');
var users = require('./router/users');

var app = koa();
var route = new Router();

route.use('/', index.routes());
route.use('/apis', apis.routes());
route.use('/users', users.routes());
app.use(route.routes());

app.listen(3000);
