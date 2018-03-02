// expect lib - swaps for conditionals inside test cases
const expect = require('expect');

const utils = require('./utils.js');

// .test.js - this file stores test cases

// DESCRIBE TESTS
// takes 2 args
// 1st - test block section - name
// 2nd - func
describe('Utils tests', () => {
    
        // it(); - lets us define a new test case
        // it takes 2 args
            // 1st - a string - what a test should do
            // 2nd - a function
    it('should add 2 nums', () => {
        var result = utils.add(33, 11);
        
        // we expect that result var to be 44 and to be a num
            // if not ====>> error
        expect(result).toBe(44).toBeA('number');

        // if(result !== 44){
        //     throw new Error(`Expected 44, but got ${result}`);
        // }
    });

    describe('# sqaure num test', () => {
        // # sqare num test
        it('should sqare a num', () => {
            var res = utils.sqare(11);

            expect(res).toBe(121).toBeA('number');

            // if(res !== 121){
            //     throw new Error(`Expected 121, but got ${res}`);
            // }
        });
    });



    it('should expect some values', () => {
        // expect(12).toNotBe(11);
        // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
        // expect([2,3,4]).toExclude(1);
        expect({
            name: 'Vasa',
            age: 23,
            location: 'Belgrado'
        }).toInclude({
            age: 23
        })
    });


    // SET NAME TEST
    it('should set name', () => {
        var user = {location: 'Belgrade', age: 25};
        var res = utils.setName(user, 'Vasilije Pantic');

        expect(res).toInclude({
            firstName: 'Vasilije',
            lastName: 'Pantic'
        })
    });


    // ASYNC ADD TEST
    it('should async add 2 nums', (done) => {// for async code - MUST have -done- as an arg
        utils.asyncAdd(4, 3, (sum) => {      // test wont be completed until -done- is called
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    // ASYNC SQUARE TEST
    it('should async square a num', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number').toBeGreaterThan(8);
            done();
        });
    });
});

