// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// MY SOLUTION
function count(str) {
    let count = {};
    for(let i = 0; i < str.length; i++){
      let char = str.charAt(i);
      if(count[char]){
        count[char]++;
      }else{
        count[char] = 1;
      }
    }
    return count
  }