
const middle = function(arr) {
  let resultArr = [];//holds the middle elements of the arr array
  if (arr.length > 2) {//checks that the length of the array is greater than 2
    if (arr.length % 2 === 0) {//check if the length is an even number
      //push the two middle values of the array when the length of the array is even
      resultArr.push(arr[Math.floor(arr.length / 2) - 1]);
      resultArr.push(arr[Math.floor(arr.length / 2)]);
    } else {
      resultArr.push(arr[Math.floor(arr.length / 2)]);//adds the middle value when the length of the array is an odd number
    }
  }
  return resultArr;
};

module.exports = middle;