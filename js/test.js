/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0, leftsum = 0;
    //nums.forEach(loop);
   //function loop(item){
   // sum += item
//}
    for (let j = 0; j < nums.length ; j++ ){
        sum += nums[j];
    }
    for (let i = 0; i < nums.length; i++){
        if(leftsum === (sum - leftsum - nums[i]))
            return i;
        leftsum += nums[i]
    }
    return -1;
};

answer = pivotIndex([1,7,3,6,5,6])
console.log(answer)