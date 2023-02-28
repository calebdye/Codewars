var longestCommonPrefix = function(strs) {
//lop through the first word
for(let i=0;i<strs[0].length;i++)
//loop through the other words
    for(let j=1;j<strs.length;j++){
         if (strs[0][i] !== strs[j][i]) {
 // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
    }}
};