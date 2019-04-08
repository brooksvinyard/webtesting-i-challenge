const enhancer = require('./enhancer.js');
// test away!


describe('repair', () => {

    it('should return the durability === 100', () => {
        expect(enhancer.repair(item)).toEqual({
            'name': 'sweet sword',
            'enhancement': 10,
            'durability': 100
        });
    });

    it('should return the durability === 100', () => {
        expect(enhancer.repair(item2)).toEqual({
            'name': 'best sword',
            'enhancement': 20,
            'durability': 100
        });
    });

    it('should return the durability === 100', () => {
        expect(enhancer.repair(item3)).toEqual({
            'name': 'bad sword',
            'enhancement': 0,
            'durability': 100
        });
    });
});

describe('succeed', () => {

    it('should return the enhancement +1', () => {
        expect(enhancer.succeed({
            'name': 'sweet sword',
            'enhancement': 10,
            'durability': 50
          })).toEqual({
            'name': 'sweet sword',
            'enhancement': 11,
            'durability': 50
        });
    });

    it('should return the enhancement +1', () => {
        expect(enhancer.succeed({
            'name': 'best sword',
            'enhancement': 20,
            'durability': 100
          })).toEqual({
            'name': 'best sword',
            'enhancement': 20,
            'durability': 100
        });
    });

    it('should return the enhancement +1', () => {
        expect(enhancer.succeed({
            'name': 'bad sword',
            'enhancement': 0,
            'durability': 0
          })).toEqual({
            'name': 'bad sword',
            'enhancement': 1,
            'durability': 0
        });
    });
});

describe('fail', () => {

    it('should return the durability -5', () => {
        expect(enhancer.fail({
            'name': 'sweet sword',
            'enhancement': 10,
            'durability': 50
          })).toEqual({
            'name': 'sweet sword',
            'enhancement': 10,
            'durability': 45
        });
    });

    it('should return the durability -10', () => {
        expect(enhancer.fail({
            'name': 'medium sword',
            'enhancement': 15,
            'durability': 50
          })).toEqual({
            'name': 'medium sword',
            'enhancement': 15,
            'durability': 40
        });
    });

    it('should return the enhancement -1 and durability -10', () => {
        expect(enhancer.fail({
            'name': 'best sword',
            'enhancement': 20,
            'durability': 100
          })).toEqual({
            'name': 'best sword',
            'enhancement': 19,
            'durability': 90
        });
    });
});