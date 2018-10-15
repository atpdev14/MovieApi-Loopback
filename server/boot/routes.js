

module.exports = function(app) {
	var db  = app.datasources["Movies"];
	console.log(db);
  
  //===============================================================
  //				FIND MOVIE BY ID
  //===============================================================
	app.get('/api/moviesAndShows/movie', function(req, res) {
	  	const id = req.params.id;
	  	// const response = JSON.parse(res);
	  	// console.log(response);
		// res.send(id);

		// db.findAll({}).then(function(movieData) {
		// 	res.json(movieData);
		// });
	});
}
 


