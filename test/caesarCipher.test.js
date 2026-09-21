import caesarCipher from "../src/caesarCipher"


test('caesarCypher a text by shifting 3', () => {
    expect(caesarCipher("a,bc", 3)).toBe("d,ef");
})