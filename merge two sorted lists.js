var mergeTwoLists = function(l1, l2) {
    // If either list is empty, return the other list's node
       if (l1 == null) return l2;
       if (l2 == null) return l1;
   
       // If l1 is lower
       if (l1.val < l2.val) {
           l1.next = mergeTwoLists(l1.next, l2);
           return l1;
       }
       // If l2 is lower
       else {
           l2.next = mergeTwoLists(l1, l2.next);
           return l2;
       }
   
       
       
       
       
       //loop through first list
       // for(let i=0;i<list1.length;i++){
       //     //loop through each on list 2
       //     for(let j=0;j<list2.length;j++){
       //         //if list1[i]<=list2[j] then add it to list 2
               
       //         if(list1[i]<=list2[j]){
       //            return list2.splice(j,0,list1[i])
       //         }
             
       //     }
       // }return list2
   };