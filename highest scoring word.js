function high(x){
    let words = x.split(" ")
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let highestScore = 0;
    let highestScoreWord = "";
      
      for (let word of words) {
        let lettersSum = 0;
        
        for (let letter of word) {
          lettersSum += alphabets.indexOf(letter) + 1;
        }
        
        if (lettersSum > highestScore) {
          highestScore = lettersSum;
          highestScoreWord = word;
        }
      }
      
      return highestScoreWord;
    }
    
    //For in loop returns the OBJ keys, basically the I (Iterator) Over the array. A for in loop 
    //over an array of 5 words will return 0,1,2,3,4. Where as a for Of Loop will return each of
    //the words. For in for keys, for of for values