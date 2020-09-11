const environment = require('../environments/environment.js');
const middlewareResponse = require('../response/middlewareResponse.js');
const spotifyModel = {};

let { Client } = require('pg');

spotifyModel.getSpotifyModel = async function(req, res ){
    
    let client = new Client({
        user: environment.development.DATABASE.user,
        password: environment.development.DATABASE.password,
        database: environment.development.DATABASE.database,
        port: environment.development.DATABASE.port,
        host: environment.development.DATABASE.host,
        ssl: { rejectUnauthorized: false }
    });
    client.connect();
    let query = 'select * from results';
    await client.query(query, (error, responseQuery) => {
        if( error ){
            console.error('Error: '+error);
        }else{
            console.log( responseQuery );
            middlewareResponse.generateResponse(req, res, responseQuery);
        }
        client.end()
    });

}

spotifyModel.getSpotifyByIdModel = async function( req, res, spotify_id ){
    try {
        client = new Client({
            user: environment.development.DATABASE.user,
            password: environment.development.DATABASE.password,
            database: environment.development.DATABASE.database,
            port: environment.development.DATABASE.port,
            host: environment.development.DATABASE.host,
            ssl: { rejectUnauthorized: false }
        });
        client.connect();
        
        let query = "select * from results where id=('"+spotify_id+"')";
        await client.query(query, (error, responseQuery) => {
            if( error ){
                console.error(error);
                console.error(error.message);
            }else{
                //console.log( responseQuery );
                middlewareResponse.generateResponse(req, res, responseQuery);
            }
            client.end()
        });
    } catch (e) {
        console.log(e);
    }


}

spotifyModel.addSpotifyModel = async function(req, res, req_body_spotify ){
    console.log("en spotify models del post")

    try {
        let typeSearch = req_body_spotify.typeSearch;
        let artist = req_body_spotify.artist;

        client = new Client({
            user: environment.development.DATABASE.user,
            password: environment.development.DATABASE.password,
            database: environment.development.DATABASE.database,
            port: environment.development.DATABASE.port,
            host: environment.development.DATABASE.host,
            ssl: { rejectUnauthorized: false }
        });
        client.connect();    
        let queryInsert = "INSERT INTO results(typeSearch, artist) VALUES( '"+typeSearch+"' , '"+artist+"' )";
        console.log( queryInsert );
         //console.log(queryInsert);
        await client.query(queryInsert, (error, responseQuery) => {
            console.log(error, responseQuery);
            if( error ){
                console.log(error);
            }
            middlewareResponse.generateResponsePost(req, res, responseQuery);
            client.end();
        });
        
    } catch (e) {
        console.log(e);
    }
}

module.exports = spotifyModel;