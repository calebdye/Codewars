decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    //make a variable for the words to go to
    let res = ''
    //trip the leading and trailing spaces and split the morse code words
    let words = morseCode.trimLeft().trimRight().split(' ')
    //loop through each morse code and then decode it and add to string.
     for(let i=0;i<words.length;i++){
       //first two if's handle spaces. becasue a space in morse code is 3 spaces. We only want one space in decoded format
       if(words[i]==''&& words[i+1]!=''){
         res = res+' '
       }else if(words[i]==''&& words[i+1]==''){
         res = res
       } else {
         res = res+MORSE_CODE[words[i]]
       }
         
     }
    
    return res
  }