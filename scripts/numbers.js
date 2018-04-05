const numbers = [3, -56, 31, 92, -4, 1, 3];

function multiply(numberArray) {
  const total = numberArray.reduce((product, number) => eval(product * number));
  return total;
}


function arrayOfEvenNumbers(numberArray) {
  const evenArray = [];
  return numberArray.filter(number => number % 2 === 0);
}

arrayOfEvenNumbers(numbers);
multiply(numbers);
