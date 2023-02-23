var twoSum = function(nums, target) {
    let res = []
    nums.forEach((el,i)=>{
        for(let j=0;j<nums.length;j++){
            if(el+nums[j]==target){
                res.push(i)
                res.push(j)
               
            }
            
        }
    });
    
    return res
};