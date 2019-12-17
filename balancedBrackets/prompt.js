// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {   
    //make a variable to hold an array of all the opening parenthesis
    let stack = [];
    //make a variable to hold the values of the closing parenthsis, to check for matching brackets later
    let match = {
        '(' : ')',
        '{' : '}',
        '[' : ']'    
    };
    
    //traverse through the string
    for(let i = 0; i < str.length; i++) {
        //if the current index is equal to a starting bracket, push it to the array
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
            let last = stack.pop();

            if(str[i] !== match[last]){
                return false;
            }
        }
    }
            if (stack.length !== 0) {
                return false;
            }
            return true;
};


var results = isBalanced("(x + y) - (4)")                 
console.log(results)