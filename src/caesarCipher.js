function shiftCharacter(character, shift) {
  const code = character.charCodeAt(0);

  if (character >= "a" && character <= "z") {
    return String.fromCharCode(
      ((code - 97 + shift) % 26) + 97
    );
  }

  if (character >= "A" && character <= "Z") {
    return String.fromCharCode(
      ((code - 65 + shift) % 26) + 65
    );
  }
  return character;
}
export default function caesarCipher(word, shift) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let newChar = shiftCharacter(letter, shift);
    result += newChar;
  }
  
  return result;
}
