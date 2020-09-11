const sinon = require('sinon');
const chai = require('chai');
const request = require('request');
var expect = chai.expect;
const server = require('./../../../index');

describe('INTEGRATION TEST: api rest invoice 2020!!!', function () {
    
    beforeEach(function() {
      console.log('In this moment is empty, this section is used for initialize connection to bd or others initizlizations. ');
    });

    afterEach(function () {
      console.log('In this moment is empty, this section is used for close connection to bd or close connection request. ');  
    });

    after(function () {
      console.log('In this moment is empty, this section is used for close connection to bd or close connection request. ');
    });

    it('Integration Test - Method Get - Endpoint: /api/facturas/:id', function (done) {
        this.timeout(10000);

        let expectedResponse = {
          "id": "ea7862db-df39-4d91-bf39-2c2df55c2ea2",
          "emisor_rut": "14515778-4",
          "folio": 123456,
          "fecha_emision": "2020-08-16",
          "receptor_rut": "14515778-5",
          "monto_neto": 1000,
          "monto_iva": 190,
          "monto_total": 1190,
          "extra_data": '{hola: 5}'
        }
        const body = '';
        var options = {
            method: 'get',
            url: 'http://localhost:3000/api/facturas/ea7862db-df39-4d91-bf39-2c2df55c2ea2',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: body
        };
        request(options, function (err, res, body){
            let response = JSON.parse(res.body);
            //console.log(response.body['0']);
            setTimeout( function () { 
              expect(res.statusCode).to.equal(200);
              expect(response.body['0'].id).to.equal( expectedResponse.id );
              expect(response.body['0'].emisor_rut).to.equal( expectedResponse.emisor_rut );
              expect(response.body['0'].folio).to.equal( expectedResponse.folio );
              expect(response.body['0'].fecha_emision).to.equal( expectedResponse.fecha_emision );
              expect(response.body['0'].receptor_rut).to.equal( expectedResponse.receptor_rut );
              expect(response.body['0'].monto_neto).to.equal( expectedResponse.monto_neto );
              expect(response.body['0'].monto_iva).to.equal( expectedResponse.monto_iva );
              expect(response.body['0'].monto_total).to.equal( expectedResponse.monto_total );
              expect(response.body['0'].extra_data).to.equal( expectedResponse.extra_data );
              done();
            }, 5000);
            
        });
    });


    it('Integration Test - Method Post - Endpoint: /api/facturas/', function (done) {
      this.timeout(10000);
      var options = { 
        method: 'POST',
        url: 'http://localhost:3000/api/facturas/',
        headers: { 
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded' 
        },
        form: 
        { 
          emisor_rut: '13745275-8',
          folio: '123456',
          receptor_rut: '14515778-8',
          monto_neto: '1000',
          monto_iva: '190',
          monto_total: '1190',
          extra_data: '{info: folio invoice}' 
        } 
      };

      request(options, function (error, res, body) {
        if(error){
          console.log('Error in request Post');
          console.log(error);
        }
        let formatBody = JSON.parse(body);
        //console.log(response);  
        setTimeout( function () { 
          expect(res.statusCode).to.equal(200);
          expect(formatBody.status_code).to.equal(201);
          expect(formatBody.body.message).to.equal('OK');
          done();
        }, 5000);
      });
  });
});