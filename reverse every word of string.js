function reverseWords(str) {
    let newStr = str.split('').reverse().join('');
   return newStr.split(' ').reverse().join(' ')
    }