function pow(x, y) {
 let result = x;
 var i = 1;
if (y > 0){
  while (i < y){
    result *= x;
    console.log('Result:', result);
    i++;
  }
  return result;
}
else if (y === 0) {
  return 1;
}
else {
  console.log("Error")
}
  
}
var res = pow(2, 3);
console.log('Result of function is:', res);