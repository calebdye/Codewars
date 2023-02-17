function findOutlier(integers){
    let odds = integers.filter(odd => odd%2)
    let even = integers.filter(e => e%2==0)
    
    if(odds.length ==1){
      return odds[0]
    } return even[0]
  }