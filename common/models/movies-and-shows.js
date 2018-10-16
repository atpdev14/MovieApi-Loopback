'use strict';

module.exports = function(Moviesandshows) {
	//========================================================
	//				Find movie by ID
	//========================================================
	Moviesandshows.remoteMethod("findMovieById", {
		accepts: {arg: 'movieId', type: 'string', required: true},
		isStatic: true,
		http: {path: '/movieId/:movieId', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	Moviesandshows.findMovieById = function(movieId, callback){
		Moviesandshows.findOne({where: {id: movieId, type: 'movie'}}, function(err, data){
			callback(null, data);			 
		})
	};


	//========================================================
	//				Find show by ID
	//========================================================
	Moviesandshows.remoteMethod("findShowById", {
		accepts: {arg: 'showId', type: 'string', required: true},
		http: {path: '/showId/:showId', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	Moviesandshows.findShowById = function(showId, callback){
		Moviesandshows.findOne({where: {id: showId, type: 'show'}}, function(err, data){
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









