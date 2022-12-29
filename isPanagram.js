function isPangram(string){
    let arr = Array.from(string)
    const uniqueCount = new Set(arr).size;
      if(uniqueCount >= 27){
        return true
      }else {return false}
    }