// function squareDigits(num){
//   let sum = ''
//      const numStr = String(num);
//    const numArr = numStr.split('');
//   for(let i=0;i<numArr.length;i++){
//    sum = sum + (numArr[i] * numArr[i])
//   }return parseInt(sum)
// }


function squareDigits(num){
    let sum = ''
    let nnum = String(num).split("").map(Number)
    for(let i=0;i<nnum.length;i++){
     sum = sum + (nnum[i] * nnum[i])
    }return parseInt(sum)
  }