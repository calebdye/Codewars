function isValidWalk(walk) {

    walk.forEach(function(el, i) { if (el == 'n' ) walk[i] = 1; });
  
    walk.forEach(function(el2, i2) { if ( el2 == 's' ) walk[i2] = -1; });
  
    walk.forEach(function(el3, i3) { if ( el3 == 'w') walk[i3] = -99; });
  
    walk.forEach(function(el4, i4) { if ( el4 == 'e') walk[i4] = 99; });
  
    if (walk.reduce((a, b) => a + b, 0) == 0 && walk.length == 10) {
  
      return true
  
    }else {return false}
  
  }