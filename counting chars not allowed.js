function printerError(s) {
    var sum=0
    const sr = [...s]
    for(let i=0; i<sr.length;i++){
      if(sr[i].search(/[^n-zN-Z]+/)!=-1){
        sum+0
      } else {sum++}
    } return `${sum}/${s.length}`
}