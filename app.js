//JS file for feb 15 lab

function sum(a, b){
  var thesum = a + b
  // console.log('The sum of ' + a + ' and ' + b + ' is ' + thesum);
  return a + b;
}

function multiply(a, b){
  var themulti = a*b;
  // console.log('The product of ' + a + ' and ' + b + ' is ' + themulti);
  return a*b;
}

function sumAndMultiply(a, b, c){
  var thesum2 = sum(a, b) + c;
  var themulti2 = multiply(a, b)*c;
  console.log(a + ' and ' + b + ' and ' + c + ' have a sum of ' + thesum2);
  console.log('The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + themulti2);
  return [thesum2, themulti2];
}

function sumArray(a){
  var theTotal = 0;
  for(var i = 0; i < a.length; i++){
    theTotal += a[i]
  }
  console.table(a);
  console.log(a + ' was passed as an array of numbers, and ' + theTotal + ' is their sum');
  return theTotal;
}

function multiplyArray(a){
  var theTotal = 1;
  for(var i = 0; i < a.length; i++){
    theTotal = a[i] * theTotal
  }
  console.table(a);
  console.log('The numbers ' + a + ' have a product of ' + theTotal);
  return theTotal;
}
