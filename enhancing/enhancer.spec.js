const enhancer = require('./enhancer.js');
const {fail,get,repair,succeed} = enhancer
// test away!
const mockItem = {
    name:'bigBear',
    enhancement:12,
    durability:44
}
describe('Repair Function ',()=>{
    it('checks if the durablility is reset to 100',()=>{
        expect(repair(mockItem))
        .toHaveProperty('durability',100)
    })

})

describe('succed Function',()=>{
    const increasedEnhancement = {...mockItem,enhancement:20}
    it('checks if enhancement is added plus one',()=>{
        expect(succeed(mockItem))
        .toHaveProperty('enhancement',mockItem.enhancement + 1)
    })

    it('if the enhancement is 20 it is not increased',
        ()=>{
            expect(succeed(increasedEnhancement))
            .toHaveProperty('enhancement',20)
    }
    )
})

describe('Fail Function', ()=>{

    const enhancedItemfifteen
     = {...mockItem,enhancement:15}

     const enhancedItemsixteen
     = {...mockItem,enhancement:16}

    it('if item enhancement is less than 15 the durability is decreased by 5',
        ()=>{
            expect(fail(mockItem))
            .toHaveProperty('durability',mockItem.durability - 5)
    })

    it('if the enhancement equal 15 the durability is decreased by 10',
        ()=>{
            expect(fail(enhancedItemfifteen
                ))
            .toHaveProperty('durability',enhancedItemfifteen
            .durability - 10)
        }
    
    )

    it('if item is greater than 16 the enhancement is decressed by 1',
        ()=>{
            expect(fail(enhancedItemsixteen))
            .toHaveProperty('enhancement',enhancedItemsixteen.enhancement -1)
            
        }
    )

})