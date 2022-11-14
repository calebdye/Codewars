function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    array.sort((a, b) => a.length - b.length)
    return array
  };