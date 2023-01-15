function findLowestInt(k) {
    let k2=k+1
    let i=1
    while(i<Number.MAX_SAFE_INTEGER){
     if( (k*i).toString().split('').sort().join(' ') === ((k+1)*i).toString().split('').sort().join(' ')) { 
      return i
    }
      i+=1
    }
}