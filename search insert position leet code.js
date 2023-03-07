var searchInsert = function(nums, target) {
    //Search if target exists, return index if so
    let place = nums.indexOf(target)

    if(place>=0){
        return place
    }else {
        //If it does not exist, loop and return the index when target is between two values
        for(let i=0;i<nums.length;i++){
            if(nums[i]<target && nums[i+1]>target ){
                return i+1
                //If lower then all values place at start
            } else if(target<nums[0]){
                return 0
                //If target larger then all values place at the end
            }else if(target>nums[nums.length-1]){
                return nums.length
            }
        }
    }
};
