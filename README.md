chai-pretty-expect [![npm version](https://badge.fury.io/js/chai-pretty-expect.svg)](http://badge.fury.io/js/chai-pretty-expect) [![Build Status](https://travis-ci.org/debitoor/chai-pretty-expect.svg?branch=master)](https://travis-ci.org/debitoor/chai-pretty-expect) [![Dependency Status](https://david-dm.org/debitoor/chai-pretty-expect.svg)](https://david-dm.org/debitoor/chai-pretty-expect) [![devDependency Status](https://david-dm.org/debitoor/chai-pretty-expect/dev-status.svg)](https://david-dm.org/debitoor/chai-pretty-expect#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/debitoor/chai-pretty-expect/badge.svg?branch=master&service=github)](https://coveralls.io/github/debitoor/chai-pretty-expect?branch=master)
==================

Will JSON.stringify and pretty-print objects passed as 2nd, 3rd, ... parameter to expect, for nice test output.

Installation
============
`npm install --save-dev chai-pretty-expect`

Usage
=====

```js
 var chai = require('chai');
 chai.use(require('chai-pretty-expect'));

 //we are inside describe
 var response;

 before(function(done){
    return request.post(url, { json:true, body: myObject }, handleResponse); //post invalid json

    function handleResponse(err, res){
        if(err){
            return done(err);
        }
        response = res;
    }
 });

 it("returns correct statusCode", function() {
    expect(response, response.body).to.have.property("statusCode", 200);
 };

```

 This expect will prettyPrint the `response.body` if `statusCode` is not `200`. This is gives very nice error messages and makes sure that you can debug more easily when tests fail.

 So instead of `[Object object]` you will get nice output of body

