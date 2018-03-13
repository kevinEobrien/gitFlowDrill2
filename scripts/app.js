const numbers = [3, -56, 31, 92, -4, 1, 3];

function multiply(numberArray) {
  let total = numberArray.reduce((product, number) => {
    return eval(product * number);
  });
  return total;
}
multiply(numbers);
