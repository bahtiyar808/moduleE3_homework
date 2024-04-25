function getNum(num1){
  return function numSum(num2){
    return num1 + num2;
  };
}

const result = getNum(3)
console.log(result(5))