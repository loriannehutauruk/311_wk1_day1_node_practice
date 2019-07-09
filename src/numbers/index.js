const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  }
  else 
  return false 
  }

// write code for numbers.sum
//we are changing it from a const arrow function to an actual function syntax so we can call it in the comboSum function below. Below the original const syntax is written out as well as the modified version.
const sum = (arr) => (arr.length === 0) ? 0 : arr[0] +sum(arr.slice(1))

function sumIt (arr) {
  (arr.length === 0) ? 0 : arr[0] + sumIt(arr.slice(1)) 
}

const comboSum = (arr, sum) => {
  let thisSum =
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}