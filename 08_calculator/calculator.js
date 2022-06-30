const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(sumArray) {
  let sum = 0;
  for (let i = 0; i  < sumArray.length; i++) {
    sum += sumArray[i];
  }
  return sum;
};

const multiply = function(multiplyArray) {
  let sum = 1;
  for (let i = 0; i < multiplyArray.length; i++) {
    sum *= multiplyArray[i];
  }
  return sum;
};

const power = function(x, y) {
	let sum = 1;
  for (let i = 0; i < y; i++) {
    sum *= x;
  }
  return sum;
};

const factorial = function(x) {
	let sum = 1;
  for (let i = x; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
