const middlewareResponse = {};

middlewareResponse.generateResponse = function(req, res, responseQuery){

    console.log("responseQuery:::");
    let data = {};
    if( responseQuery.rowCount > 0 ){
        for(i=0; i<responseQuery.rowCount; i++){
            data[i] = {
                id: responseQuery.rows[i].id,
                typesearch: responseQuery.rows[i].typesearch,
                artist: responseQuery.rows[i].artist
            }
        }
    }
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ 
        "status_code": 200,
        "headers": req.headers,
        "body": data
    });
}

middlewareResponse.generateResponsePost = function(req, res, responseQuery){
    let data = {};
    console.log("**********************");
    console.log(responseQuery);
    console.log("**********************");
    if( responseQuery.rowCount ){
        data = {
            message: 'OK'
        }
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ 
        "status_code": 201,
        "headers": req.headers,
        "body": data
    });
}

middlewareResponse.generateResponseDelete = function(req, res, responseQuery){
    let data = {};
    if( responseQuery.rowCount ){
        data = {
            message: 'OK'
        }
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ 
        "status_code": 204,
        "headers": req.headers,
        "body": data
    });
}

middlewareResponse.generateResponseError = function(req, res, dataError){
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ 
        "status_code": 500,
        "headers": req.headers,
        "body": dataError
    });
}

module.exports = middlewareResponse;