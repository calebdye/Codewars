function countPositivesSumNegatives(input) {
    var count = 0
    var sum = 0
    
    if(input == null || input ==[]){
      return []
    } else {
    
        for(let i=0; i<input.length;i++){
      if(input[i]>0){
        count = count + 1
      }else if (input[i]<0){
        sum = sum + input[i]
      } 
    } if (count === 0 && sum === 0){
      return []
    } else {
      return [count,sum]
    }
      
      
    }
    