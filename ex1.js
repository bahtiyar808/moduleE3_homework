function numsCounter() {
  let arr = [1,2,3,null,'str',4, 0, 0, 6];
  let even = 0
  let odd = 0
  let zero = 0
  let other = 0
  for (let i = 0; i<arr.length; i++) {
    if (typeof(arr[i]) === 'number') {
      if (arr[i]%2 == 0 && arr[i] != 0){
        even++
      } else if (arr[i]%2 != 0) {
        odd++
      } else if (arr[i] == 0) {
        zero++
      }
    } else {
      other++
    }
  }
  console.log(`Количество четных: ${even}, нечетных: ${odd}, нулей: ${zero}, другие типы: ${other}`) }
  
  numsCounter()



