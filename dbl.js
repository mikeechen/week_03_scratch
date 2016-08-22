function doubleChar(str) {
  if (typeof str !== "string"){
    return "Ruh roh! That isn't a string!";
  }
  var finalstr='';
  for (let i = 0; i < str.length; i++) {
    finalstr += str[i] + str[i];
  }
  console.log(finalstr);
}

doubleChar('wow');
