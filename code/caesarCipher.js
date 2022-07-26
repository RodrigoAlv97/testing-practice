function caesarCipher(string, shift) {
  let resultArray = [];

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i) + shift;
    while (code > 122) {
      code = code - 122 + 96;
    }
    resultArray.push(String.fromCharCode(code));
  }
  return resultArray.join("");
}

export { caesarCipher };
