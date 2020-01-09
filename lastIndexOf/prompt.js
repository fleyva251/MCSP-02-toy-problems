// Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  //solution code here
  //return array.lastIndexOf(target)
  for(let i = array.length; i >= 0; i--) {
    if(array[i] === target) {
      return i
    }
  }
}

console.log(lastIndexOf(1, [1,2,4,5,6,4,6,8,4,32,5,8,4,5,6,4]))