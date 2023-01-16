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
    
    