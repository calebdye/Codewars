function firstToLast(str,c){
    //get index of first search
    let position = str.indexOf(c,0)
     if (position==-1){
       return -1
     } else if (str.indexOf(c,position+1)==-1) {
       return 0
     }else {
       //find difference of first position and next
       //First return won't work becuse results are expecting largest num
       //return str.lastIndexOf(c,position+1) - str.indexOf(c,0)
       return str.lastIndexOf(c,str.length) - str.indexOf(c,0)
  
     }
       //str.indexOf(c,position+1) - str.indexOf(c,0)
    
  }