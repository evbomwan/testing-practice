import capitalize from "../src/capitalize";
test('to capitalize the first letter', () => {
    expect(capitalize("name")).toBe("Name"); 
});