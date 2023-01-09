function findAverage(array) {
    if (array.length < 1 ){
      return 0;
    } else {
      return array.reduce((a,b)=> a+b)/array.length
    }