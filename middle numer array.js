function gimme (triplet) {
    //sort  array into new array
     let newarr = [...triplet].sort(function(a, b){return a-b})
         //triplet.sort(function(a, b){return a-b});
    let answer =  newarr[1]
     //return newarr
    return triplet.indexOf(answer)
     //find index of new array[1] in original array
   }