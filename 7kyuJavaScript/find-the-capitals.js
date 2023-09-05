// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// MY SOLUTION
let capitals = function (word) {
	let arr = []
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (char === char.toUpperCase()){
      arr.push(i)
    }
}
  return arr
};