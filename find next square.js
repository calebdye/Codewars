function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //check if perfect square
    if (Number.isInteger(Math.sqrt(sq))) {
      //if perfect square find next perfect square
         let nextN = Math.floor(Math.sqrt(sq)) + 1;
         return nextN * nextN;
      //if not pfct then return -1
      } else {
      return -1;
  }
  }