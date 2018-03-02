const request = require('supertest'); // testing express apps
const expect = require('expect');

var app = require('./server.js').app; // requiring app for testing purpoises 

describe('Server tests', ()=> {
    describe('# / root route test', () => {
         // ROOT ROUTE TEST
        it('should return -Howddy neigbor', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    })
                })
                .end(done);
        });
    });
   
    describe('# /users route test', () => {
        // /USERS ROUTE TEST
        it('should return users info', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Vasilije',
                        age: 23
                    })
                })
                .end(done)
        });
    });
});


