const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

// TESTING WITH SPIES
    // no need to test spearate files
    // spies lets us take a peak at a certain func from in this case db.js file for example and test it
 
describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    // setting what to rewire
    app.__set__('db', db);//1st arg - what to rewire    2nd - with what to rewire


    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user obj', () => {
        var email = 'andrew@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});