const spotifyModel = require('../models/spotifyModel.js')

let spotifyController = {};
spotifyController.getSpotifyController = function(req, res){
    spotifyModel.getSpotifyModel(req, res);
}

spotifyController.getSpotifyByIdController = function( req, res, spotify_id ){
    spotifyModel.getSpotifyByIdModel(req, res, spotify_id);
}

spotifyController.addSpotifyController = function( req, res, req_body_spotify ){
    console.log("en spotify controller del post")
    spotifyModel.addSpotifyModel( req, res, req_body_spotify);
}

module.exports = spotifyController;
