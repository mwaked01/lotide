
const tail = function(arr) {
  let newArr = arr.slice(1); // adds all the elemnts of the array to newArr except for the first element
  return newArr;
};

module.exports = tail;