function infiniteLoop(arr,d,n){
  // the loop is for the number of elements to move
  for(var i = 1; i <= n; i++){
    if(d === 'left'){
      //here we take the first element from the first array 
      //and push it onto the back of the last array
      arr[2].push(arr[0].shift());
      //Then we take the first element of last arry
      //and push it onto the middle array
      arr[1].push(arr[2].shift());
      //then we take the first element from the middle array and 
      //push it onto the first array
      arr[0].push(arr[1].shift());
    } else {
      arr[0].unshift(arr[2].pop());
      //pop element off last array and push(unshift) it onto the 
      //first element of the last array
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}