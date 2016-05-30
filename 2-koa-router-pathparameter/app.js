"use strict";

var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var route = new Router();

route.get('/test/:name/:email', function *() {
    console.log(this.params.name);
    console.log(this.params.email);
    this.body = this.params.name + ': ' + this.params.email;
})

app.use(route.middleware());

app.listen(3000);
