function findOdd(A) {
    var count = {};
  A.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  
  for(prop in count) {
      if(count[prop] % 2 !== 0) return Number(prop);
    }
  }