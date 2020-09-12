//const sinon = require('sinon');
const { exec } = require("child_process");
const chai = require('chai');
const request = require('request');
const expect = chai.expect;
let url;
let path;


describe('INTEGRATION TEST: api rest invoice 2020!!!', function () {
    
    beforeEach(function() {
      console.log('In this moment is empty, this section is used for initialize connection to bd or others initizlizations. ');
      url = 'http://localhost:3000/';
      path = 'api/spotify/';
    });

    afterEach(function () {
      console.log('In this moment is empty, this section is used for close connection to bd or close connection request. ');  
    });

    after(function () {
      console.log('In this moment is empty, this section is used for close connection to bd or close connection request. ');
    });

    
    it('Integration Test - Method Get - Endpoint: /api/spotify/:id', function (done) {
        this.timeout(10000);
        
        let expectedResponse = {
          "id": 1,
          "typesearch": "album",
          "artist": "julio iglesias"
        }
        //url: 'http://localhost:3000/api/spotify/1',
        const body = '';
        var options = {
            method: 'get',
            url: url + path + '1',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: body
        };
        request(options, function (err, res, body){
            if( err ) {
              console.log( err );
            }

            let response = JSON.parse(res.body);
            setTimeout( function () { 
              expect(res.statusCode).to.equal(200);
              expect(response.body['0'].id).to.equal( expectedResponse.id );
              expect(response.body['0'].typesearch).to.equal( expectedResponse.typesearch );
              expect(response.body['0'].artist).to.equal( expectedResponse.artist );
              done();
            }, 5000);
            
        });
    });

    
    it('Integration Test - Method Post - Endpoint: /api/spotify/', function (done) {
      this.timeout(10000);
      // url: 'http://localhost:3000/api/spotify/',
      const options = { 
        method: 'POST',
        url: url + path,
        headers: { 
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded' 
        },
        form: 
        { 
          typeSearch: 'artist',
          artist: 'Michael Jackson'
        } 
      };

      request(options, function (error, res, body) {
        if(error){
          console.log('Error in request Post');
          console.log(error);
        }
        let formatBody = JSON.parse(body); 
        setTimeout( function () {
          expect(res.statusCode).to.equal(200);
          expect(formatBody.status_code).to.equal(201);
          expect(formatBody.body.message).to.equal('OK');
          done();
        }, 5000);
      });
  });
});