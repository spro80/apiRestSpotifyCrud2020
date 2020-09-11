const spotifyController = require('../controllers/spotifyControllers.js');
const middlewareResponse = require('./../response/middlewareResponse.js');
const base_path = '/api';

module.exports = function ( app ){
    
    app.get(base_path+'/spotify/', function (req, res) {
        console.log("route---> paso 1");
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
            console.log( req.body );
            
            console.log("paso -1");
            console.log(req.body);
            console.log(req.body.typeSearch);
            console.log(req.body.artist);
            if( req && req.body && req.body.typeSearch && req.body.artist ){
                console.log("paso 0");
                const req_body_spotify = {
                    "typeSearch": req.body.typeSearch,
                    "artist": req.body.artist
                };
                console.log("paso 1");
                spotifyController.addSpotifyController( req, res, req_body_spotify );
            }else{
                console.log("paso 2");
                dataError = {
                    modules: 'routes.js',
                    method: 'app.post',
                    message: 'empty data in Post /api/spotify/'
                }
                middlewareResponse.generateResponseError(req, res, dataError);
            }
        }catch(e){
            console.log("paso 3");
            dataError = {
                modules: 'routes.js',
                method: 'app.post',
                message: e.message
            }
            middlewareResponse.generateResponseError(req, res, dataError);
        }
    });

}