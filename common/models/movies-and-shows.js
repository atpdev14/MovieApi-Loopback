'use strict';

module.exports = function(Moviesandshows) {
	//========================================================
	//				Find movie by ID
	//========================================================
	Moviesandshows.remoteMethod("findMovieById", {
		accepts: {arg: 'id', type: 'string', required: true},
		http: {path: '/movie/:id', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	Moviesandshows.findMovieById = function(id, callback){
		Moviesandshows.findOne({where: {id: id, type: 'movie'}}, function(err, data){
			callback(null, data);			
		})
	};


	//========================================================
	//				Find show by ID
	//========================================================
	Moviesandshows.remoteMethod("findShowById", {
		accepts: {arg: 'id', type: 'string', required: true},
		http: {path: '/show/:id', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	Moviesandshows.findShowById = function(id, callback){
		Moviesandshows.findOne({where: {id: id, type: 'show'}}, function(err, data){
			callback(null, data)
		})
	};


	//========================================================
	//				Search for a movie
	//========================================================
	Moviesandshows.remoteMethod("searchMovie", {
		accepts: {arg: 'title', type: 'string', required: true},
		http: {path: '/search', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	Moviesandshows.searchMovie = function(title, callback){
		Moviesandshows.find({where: {name: title}}, function(err, data){
			callback(null, data)
		})
	};
};








