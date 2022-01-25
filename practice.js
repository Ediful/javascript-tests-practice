function capitalizeString(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

export { capitalizeString, reverseString };
