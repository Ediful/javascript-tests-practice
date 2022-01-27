function capitalizeString(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

function caesarCipher(string, shift) {
  let encryptedString = '';
  for (let i = 0; i < string.length; i += 1) {
    let charCode = string.charCodeAt(i);
    if (charCode < 64) {
      charCode += 0;
    } else if (charCode === 90 || charCode === 122) {
      charCode -= 25;
    } else charCode += shift;
    encryptedString += String.fromCharCode(charCode);
  }

  return encryptedString;
}

function analyzeArray(array) {
  const object = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  object.average = array.reduce((a, b) => a + b, 0) / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
}

export {
  capitalizeString,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
