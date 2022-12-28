function highAndLow(numbers){
    let newNum = numbers.split(' ').sort(function(a, b){return b-a})
    return `${newNum[0]} ${newNum[newNum.length-1]}`
  }