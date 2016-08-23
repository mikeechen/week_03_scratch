function doubleChar(str) {
  if (typeof str !== "string"){
    return "Ruh roh! That isn't a string!";
  }
  var finalstr='';
  for (let i = 0; i < str.length; i++) {
    finalstr += str[i] + str[i];
  }
  return finalstr;
}

console.log(doubleChar('String'));
console.log(doubleChar('Hello World!'));
console.log(doubleChar('1234!_ '));
console.log(doubleChar(5));
