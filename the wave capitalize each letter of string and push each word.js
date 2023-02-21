function wave(str){
  let res =[]
  //put entire string into single array element
  let re = [str]
  //didn't really need for each since using 1 array element, but get that element
  re.forEach((word)=> {
    //loop through the length of word, split the word into letter. Capitalize the index of that letter
    for(let i=0;i<word.length;i++){
      let letters = word.split('')
      letters[i] = letters[i].toUpperCase()
      
      res.push(letters.join(''))
      
    }
    //remove the lower case output for the spaces
  }); return res.filter((el)=> el!=el.toLowerCase())
  
}