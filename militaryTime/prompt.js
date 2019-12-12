// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

//I: string of time
//O: return string but converted in military time
//C: N/A
//E: N/A

//solution 1: slicing the string and checking for am or pm, then returning adjusted time after that

function militaryTime(timeStr) {
  //write code here
  //Put time string in a new variable and slice it by the string length minus 2, to check for am and pm
  //check if the variable is equal to either am or pm
    //if it's equal to am, get a new variable and split time string at the a. Pop the last element since we 
    //don't need it. 
      //concat a 0(thats in a variable) to the front of the string
      //return concated string
   //if its equal to pm, get a new variable and split the time string at the p. Pop the last element.
    //add 12 to the number in the string.
    //return string

    


}
