// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

//I: array of numbers
//O: max number of consecutive ones 
//C: n/A
//E: 

function maxConsecutiveOnes(array) {
  //write solution code
  
  
  
  //add a count variable
  let maxOnes = 0;
  
  //add a second count variable
  let ones = 0;
  
  //loop through the array
  for(let i = 0; i < array.length; i++) {
    //check if i is 1
    if(array[i] === 1) {
      //if it is add count to ones
      ones = ones + 1;
    } else {
      //if not reset ones
      ones = 0;
    }
    // check if count is greater
    if (ones > maxOnes) {
      //if so, reassign
      maxOnes = ones;
    }
  }
  //return highest count
  return maxOnes;
}


console.log(maxConsecutiveOnes([1,1,2,3,4,5,1,1,1,1,1,4,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1]))