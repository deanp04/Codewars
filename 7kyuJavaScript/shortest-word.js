// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



// MY SOLUTION
function findShort(s){
    let word = s.split(" ")
    let shortWord = word.reduce((short, c) => {
      return c.length < short.length ? c : short;
    }, word[0])
    return shortWord.length
  }