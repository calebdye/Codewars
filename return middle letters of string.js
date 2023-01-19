function getMiddle(s){
    let letters = s.split('')
    if(s.length%2===0){
      return  s[(s.length/2) - 1] + s[s.length/2]
    }else  if(s.length%2!=0){
      return  s[Math.floor(s.length/2)]
    } 
  }