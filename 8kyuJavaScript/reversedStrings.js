// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// -----MY SOLUTION-----
function solution(str){
    return str.split('').reverse().join('');
  }

// ---ANOTHER SOLUTION---
const solution = str => str.split('').reverse().join('');