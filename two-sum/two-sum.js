/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let numberIndex = new Map()
//     let result = []
    
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         let diff = target - num 
        
//         if (numberIndex.has(diff)){
//             result[0] = numberIndex.get(diff)
//             result[1] = i
//             return result
//         }
//         numberIndex.set(num, i)
//     }
//     return result
        
// }

var twoSum = function(nums, target) {
    let numberIndex = new Map()
    let result = []
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let diff = target - num
        
        if (numberIndex.has(diff)) {
            result[0] = numberIndex.get(diff)
            result[1] = i
            return result
        }
        numberIndex.set(num, i)
    }
    return result
}


