function deleteNth(arr,n){
    //make object to map array values and counts
    var count = {}
    //make new array to return
    let new_arr=[]
    //loop each and add to count object
    arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
      //while looping check count of each element, once at limit it does not push
        if (count[element] <= n) {
          new_arr.push(element);
      }
      //return result
  });return new_arr
    }
    
  