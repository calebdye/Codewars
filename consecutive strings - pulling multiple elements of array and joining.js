
function longestConsec(strarr, k) {
		var longest = "";
		for(var i=0;k>0 && i<=strarr.length-k;i++){
			var tempArray = strarr.slice(i,i+k);
			var tempStr = tempArray.join("");
			if(tempStr.length > longest.length){
				longest = tempStr;
			}
		}
		return longest;
}