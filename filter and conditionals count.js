function countGrade(scores){
    let S=0
    let A=0
    let B=0
    let C=0
    let D=0
    let X=0
    scores.filter(x => {
      if(x>= 100){
        S=S+1
      }else if(x>=90){
        A=A+1
      }else if(x<90 && x>= 80){
        B=B+1
      }else if(x<80 && x>= 60){
        C=C+1
      }else if(x<60 && x>= 0){
        D=D+1
      }else{X=X+1}
  }) 
    return {S,A,B,C,D,X}
  }