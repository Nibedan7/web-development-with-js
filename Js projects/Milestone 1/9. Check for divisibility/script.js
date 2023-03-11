function divisibility(nums){
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(num%3==0 && num%2!=0){
            console.log(num);
        }
    }
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
divisibility(nums);