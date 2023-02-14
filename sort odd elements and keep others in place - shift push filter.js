function sortArray(array) {
    let odds = array.filter(n => n%2).sort((a,b)=>a-b)
   
    let res=[]
    
    for(var i = 0;i<array.length;i++){
      //Put even elements onto the array as they come up
      if(array[i]%2===0){
        res.push(array[i])
      }//If odd shift it off the result table 
      else {
        res.push(odds.shift())
            }
            //return array.map((x) => x % 2 ? odd.shift() : x); turnery version
    }
    return res
  }


return array.map((x) => x % 2 ? odd.shift() : x);