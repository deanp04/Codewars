// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// MY SOLUTION
var humanYearsCatYearsDogYears = function(y) {
    let cy, dy;
    if(y === 1){
      cy = 15
      dy = 15
    }else if(y === 2){
      cy = 15+9
      dy= 15+9
    }else{
      cy = 15+9+4*(y-2)
      dy = 15+9+5*(y-2)
    }
    return [y, cy, dy]
  }