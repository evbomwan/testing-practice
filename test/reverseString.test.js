import reverseString from "../src/reverseString";

test('to reverse a string', () => {
    expect(reverseString("hello")).toBe(("olleh"))
});