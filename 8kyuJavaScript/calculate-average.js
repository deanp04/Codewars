// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// -----MY SOLUTION-----
function findAverage(array) {
    if(array.length > 0){
      let sum = array.reduce((a,b) => a+b)
      let avg = sum / array.length
      return avg
    }else{
    return 0;
    }
  }

// -----ANOTHER SOLUTION-----
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }