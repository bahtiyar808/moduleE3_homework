let countDiv = 0
function checkPrime(num) {
  if (num <= 1000){
    for (let div=1; div<=num; div++){
      if (num % div === 0){
        countDiv++
      }
    }
    if (countDiv == 2){
      console.log('Число простое')
    } else if (countDiv === 1) {
      console.log('Число 1 не является ни простым не составным')
    } else if (countDiv === 0) {
      console.log('Число 0 не простое')
    } else {
      console.log('Число не простое')
    }
  } else {
    console.log('Данные неверны')
  }
}
checkPrime(1001)