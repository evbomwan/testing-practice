import analyzeArray from "../src/analyzeArray"


test('getting average,min,max and length of numbers in an array', () => {
    const result = analyzeArray([1,2,3])
    expect(result).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    })
})