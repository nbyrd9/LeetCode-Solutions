/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var sArr = s.trim().split(' ');
    if(sArr.length === 0){
      return 0;
    }else{
      return sArr[sArr.length - 1].length;
    }
};