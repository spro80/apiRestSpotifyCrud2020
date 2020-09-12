const spotifyController = require('../controllers/spotifyControllers.js');
const middlewareResponse = require('./../response/middlewareResponse.js');
const base_path = '/api';

module.exports = function ( app ){
    
    app.get(base_path+'/spotify/', function (req, res) {
        try{
            spotifyController.getSpotifyController( req, res);
        }catch(e){
            console.log(e);
        }
    });

    app.get(base_path+'/spotify/:id', function (req, res) {
        try{
            spotify_id = req.params.id;
            spotifyController.getSpotifyByIdController(req, res, spotify_id);
        }catch(e){
            console.log(e);
        }
    });
    
    app.post(base_path+'/spotify/', function (req, res) {
        try{
            if( req && req.body && req.body.typeSearch && req.body.artist ){
                const req_body_spotify = {
                    "typeSearch": req.body.typeSearch,
                    "artist": req.body.artist
                };
                spotifyController.addSpotifyController( req, res, req_body_spotify );
            }else{
                dataError = {
                    modules: 'routes.js',
                    method: 'app.post',
                    message: 'empty data in Post /api/spotify/'
                }
                middlewareResponse.generateResponseError(req, res, dataError);
            }
        }catch(e){
            dataError = {
                modules: 'routes.js',
                method: 'app.post',
                message: e.message
            }
            middlewareResponse.generateResponseError(req, res, dataError);
        }
    });

    app.delete(base_path+'/spotify/:id', function (req, res) {
        try{
            spotify_id = req.params.id;
            spotifyController.deleteSpotifyController(req, res, spotify_id);
        }catch(e){
            console.log(e);
        }
    });

}