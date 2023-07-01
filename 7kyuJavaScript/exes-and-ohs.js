// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// MY SOLUTION
function XO(str) {
    let numOfX = str.toLowerCase().split('x').length
    let numOfO = str.toLowerCase().split('o').length
    if(numOfX === numOfO){
      return true
    }else{
      return false
    }
}

// ANOTHER SOLUTION
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }