//JS file for feb 15 lab

var pTagOne = document.getElementById('ans-one');
function sum(a, b){
  var thesum = a + b;
  // console.log('The sum of ' + a + ' and ' + b + ' is ' + thesum);
  pTagOne.textContent = 'The sum of ' + a + ' and ' + b + ' is ' + thesum
  return a + b;
}

var pTagTwo = document.getElementById('ans-two');
function multiply(a, b){
  var themulti = a*b;
  // console.log('The product of ' + a + ' and ' + b + ' is ' + themulti);
  pTagTwo.textContent = 'The product of ' + a + ' and ' + b + ' is ' + themulti
  return a*b;
}

var pTagThree = document.getElementById('ans-three');
var pTagThreeb = document.getElementById('ans-threeb');
function sumAndMultiply(a, b, c){
  var thesum2 = sum(a, b) + c;
  var themulti2 = multiply(a, b)*c;
  // console.log(a + ' and ' + b + ' and ' + c + ' have a sum of ' + thesum2);
  // console.log('The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + themulti2);
  pTagThree.textContent = a + ' and ' + b + ' and ' + c + ' have a sum of ' + thesum2
  pTagThreeb.textContent = 'The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + themulti2
  return [thesum2, themulti2];
}

var pTagFour = document.getElementById('ans-four');
var pTagFourb = document.getElementById('ans-fourb');
function sumArray(a){
  var theTotal = 0;
  for(var i = 0; i < a.length; i++){
    theTotal += a[i]
  }
  // console.table(a);
  // console.log(a + ' was passed as an array of numbers, and ' + theTotal + ' is their sum');
  pTagFour.textContent = a
  pTagFourb.textContent = a + ' was passed as an array of numbers, and ' + theTotal + ' is their sum'
  return theTotal;
}

var pTagFive = document.getElementById('ans-five');
var pTagFiveb = document.getElementById('ans-fiveb');
function multiplyArray(a){
  var theTotal = 1;
  for(var i = 0; i < a.length; i++){
    theTotal = a[i] * theTotal
  }
  // console.table(a);
  // console.log('The numbers ' + a + ' have a product of ' + theTotal);
  pTagFive.textContent = a
  pTagFiveb.textContent = 'The numbers ' + a + ' have a product of ' + theTotal
  return theTotal;
}
