import calc from "./calc";

test('Calculator Objects' ,()=>{
    expect(calc(2,2)).toMatchObject({mult:4,sub:0,div:1,add:4});

});

test('wrong inputs' ,()=>{
    expect(calc('a',2)).toBeNull();

});

test('Empty inputs' ,()=>{
    expect(calc()).toBeNull();

});

test('division by 0' ,()=>{
    expect(calc(2,0)).toMatchObject({mult:0,sub:2,div:null,add:2});

});

