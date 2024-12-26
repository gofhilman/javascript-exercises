const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(elements) {
	return elements.reduce((total, element) => total + element, 0);
};

const multiply = function(elements) {
  return elements.reduce((res, element) => res * element);
};

const power = function(base, exp) {
  let res = 1;
	for (let i = 0; i < exp; i++) res *= base;
  return res;
};

const factorial = function(number) {
	let res = 1;
  if (number!=0) {
    for (let i = 1; i <= number; i++) res *= i;
  }
  return res;
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
