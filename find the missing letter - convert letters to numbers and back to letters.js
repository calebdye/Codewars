// function findMissingLetter(array){
//   let res =''
//   for(var i=0;i<array.length;i++){
//     console.log(parseInt(array[i], 36) - 9)
//     if( (parseInt(array[i], 36) - 9)+1 !== (parseInt(array[i+1], 36) - 9) && array[0]==array[0].toUpperCase() ){
//       return ((parseInt(array[i], 36)+1 - 9)+9).toString(36).toUpperCase()
      
//     } else {return ((parseInt(array[i], 36)+1 - 9)+9).toString(36).toLowerCase()}
//   }
  
// }
//this top one is not returning correct results for caps letters

function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}