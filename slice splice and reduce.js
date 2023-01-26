function threeInOne(arr){
    //Use slice here to make a copy - Slice created a new array from a given array from a start to end position
    //empty Slicde copies whole array
   let arr2=arr.slice()
   let res=[]
   for (var i=0;i<arr.length/3;i++){
     //Splice is used to add/remove elements. Can remove some and then add others in same call
     res.push(arr2.splice(0,3).reduce((a,b)=> a+b))
   }return res 
  }
  