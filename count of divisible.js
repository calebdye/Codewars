function getDivisorsCnt(n){
    let count = 0
    for(let i=0; i<=n;i++){
      if(Number.isInteger(n/i)){
        count++
      }
    }return count
}