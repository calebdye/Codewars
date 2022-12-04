var number = function(busStops){
    // loop through and get all 1st nums added
    let one = 0
    for(let i =0; i<busStops.length; i++){
      one = one + busStops[i][0]
    } 
    // loop through and get all 2nd nums added
    let two = 0
      for(let j=0; j<busStops.length;j++){
        two = two + busStops[j][1]
      }
    //return difference
    return one - two
  }