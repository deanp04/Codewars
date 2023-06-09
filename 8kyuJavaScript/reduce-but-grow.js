// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// -----MY SOLUTION-----
function grow(x){
    let result = x.reduce((a,b) => a*b)
    return result
  }

// -----ANOTHER SOLUTION-----
const grow=x=> x.reduce((a,b) => a*b);