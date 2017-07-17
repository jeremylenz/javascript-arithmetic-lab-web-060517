function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function inc(num) {
  return ++num;
}

function dec(num) {
  return --num;
}

function makeInt(str) {
  var result = parseInt(str, 10);
  return result;
}

function preserveDecimal(str) {
  return parseFloat(str);
}
