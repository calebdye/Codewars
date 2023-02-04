function nthSmallest(arr, pos){
    let newArr = arr.sort((a,b) => a-b )
    return newArr[pos-1]
  }