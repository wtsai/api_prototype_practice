"use strict";

module.exports = {
	init: function() {
		return function(callback) {
			if (callback)
				callback(null, 'init_function().');
		};
	},
	login: function() {
		return function(callback) {
			if (callback)
				callback(null, 'login_function().');
		};
	},
	articles: function() {
		return function(callback) {
			if (callback)
				callback(null, 'Get all articles.');
		};
	},
	GetArticles: function() {
		return function(callback) {
			if (callback)
				callback(null, 'Get all articles by user.');
		};
	},
	GetArticle: function(ArticleID) {
		return function(callback) {
			if (callback)
				callback(null, 'Get article by Article ID');
		};
	},
	AddArticle: function() {
		return function(callback) {
			if (callback)
				callback(null, 'Add a Article by user.');
		};
	},
	UpdateArticle: function(ArticleID) {
		return function(callback) {
			if (callback)
				callback(null, 'Update a Article.');
		};
	},
	DeleteArticle: function(ArticleID) {
		return function(callback) {
			if (callback)
				callback(null, 'Delete a Article');
		};
	},
	Comments: function(ArticleID) {
		return function(callback) {
			if (callback)
				callback(null, 'Get all comments by Article ID.');
		};
	},
	AddComment: function(ArticleID) {
		return function(callback) {
			if (callback)
				callback(null, 'Add a new comment by Article ID');
		};
	},
};
