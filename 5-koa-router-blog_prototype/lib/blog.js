"use strict";

var Blog = module.exports = function() {
	this.config = {}; 
};

Blog.prototype.init = function(callback) {
	if (callback)
		callback(null, 'init_function().');
};

Blog.prototype.login = function(callback) {
	if (callback)
		callback(null, 'login_function().');
};

Blog.prototype.articles = function(callback) {
	if (callback)
		callback(null, 'Get all articles.');
};

Blog.prototype.GetArticles = function(callback) {
	if (callback)
		callback(null, 'Get all articles by user.');
};

Blog.prototype.GetArticle = function(ArticleID, callback) {
	if (callback)
		callback(null, 'Get article by Article ID');
};

Blog.prototype.AddArticle = function(callback) {
	if (callback)
		callback(null, 'Add a Article by user.');
};

Blog.prototype.UpdateArticle = function(ArticleID, callback) {
	if (callback)
		callback(null, 'Update a Article');
};

Blog.prototype.DeleteArticle = function(ArticleID, callback) {
	if (callback)
		callback(null, 'Delete a Article');
};

Blog.prototype.Comments = function(ArticleID, callback) {
	if (callback)
		callback(null, 'Get all comments by Article ID.');
};

Blog.prototype.AddComment = function(ArticleID, callback) {
	if (callback)
		callback(null, 'Add a new comment by Article ID');
};
