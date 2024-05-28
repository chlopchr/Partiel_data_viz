let nums = [5, 6, 14];
let target = 19;


function twoSum(array, target) {
    let nombres = [];
    
    for ( let i = 0;i < array.length; i++) {
        
        for (let j =i+1;j < array.length; j++) {
            if (array[i]+array[j]===target){
                nombres.push(array[i],array[j]);
            }
        }
    }
    return nombres;
        
}


console.log(twoSum(nums, target)); 
