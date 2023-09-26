function solution(str, ending){
    let last = str.slice(ending.length * -1)
    
    if (last === ending) 
    {return true }
    else if(ending==''){return true}
    else {return false}
  }