// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY SOLUTION
function positiveSum(arr) {
    let positives = arr.filter( n => n > 0 );
    let result = positives.reduce( (acc,c) => acc + c, 0 ); 
    return result
    }

// ANOTHER SOLUTION
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }