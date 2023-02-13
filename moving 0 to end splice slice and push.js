function moveZeros(arr) {
  let newArr = arr.slice()
  for(var i = arr.length - 1; i >= 0; i--){
    if(newArr[i]===0){
      newArr.splice(i,1)
      newArr.push(0)
            
      //newArr.push(newArr.splice(i,1))
    }
  }return newArr
}