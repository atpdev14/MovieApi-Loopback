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

	//Initialize custom endpoint to retrieve a movie by its ID
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

	//Initialize custom endpoint to retrieve a show by its ID
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

	//Initialize custom endpoint to retrieve a movie by its title
	Moviesandshows.searchMovie = function(title, callback){
		Moviesandshows.find({where: {name: title}}, function(err, data){
			callback(null, data)
		})
	};

	//========================================================
	//				Display a random movie
	//========================================================
	Moviesandshows.remoteMethod("random", {
		http: {path: '/random', verb: 'get'},
		isStatic: true,
		returns: {arg: 'name', type: 'object'}
	});

	//Initialize custom endpoint to display a random movie
	Moviesandshows.random = function(callback){
		Moviesandshows.find(function(err, data){
			let n = data.length;
			let rand = Math.floor(Math.random() * n);
			callback(null, data[rand])
		});
	};


	//========================================================
	//				Find movie by Genre
	//========================================================
	Moviesandshows.remoteMethod("genre", {
		accepts: {arg: 'genre', type: 'string', required: true},
		isStatic: true,
		http: {path: '/genre/:genre', verb: 'get'},
		returns: {arg: 'name', type: 'object'}
	});

	//Initialize custom endpoint to retrieve a list of movies by their genre
	Moviesandshows.genre = function(genre, callback){
		Moviesandshows.find({where: {genre1: genre, type: 'movie'}}, function(err, data){
			callback(null, data);			 
		})
	};
};









