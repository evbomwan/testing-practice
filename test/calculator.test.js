import calculator from "../src/calculator";

describe('basic calulator', () =>{
    test('add two numbers', () => {
        expect(calculator(2, "+", 3)).toBe(5);
    });
    test('subtract two numbers', () => {
        expect(calculator(4, "-", 5)).toBe(-1);
    });
    test('divide two numbers', () => {
        expect(calculator(6, "/", 2)).toBe(3);
    });
    test('mutiply two numbers', () => {
        expect(calculator(2, "*", 2)).toBe(4);
    });
});


