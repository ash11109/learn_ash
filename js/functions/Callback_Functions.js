function printResult(result) {
    console.log(result);
  }
  
  function add(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  add(5, 5, printResult);