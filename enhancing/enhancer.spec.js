const enhancer = require('./enhancer.js');
const {fail,get,repair,succeed} = enhancer
// test away!
const mockItem = {
    name:'bigBear',
    enhancement:20,
    durability:44
}
describe('tell me something ',()=>{
    it('checks if the durablility is reset to 100',()=>{
        expect(repair(mockItem))
        .toHaveProperty('durability',100)
    })

    it('checks for succed',()=>{
        expect(succeed(mockItem))
        .toBe('a')
    })
})