//Write a function that takes a single string (word) as argument.
//The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char === char.toUpperCase()) {
      result.push(i);
    }
  }

  return result;
}

console.log(capitals('CodEWaRs')); // Output: [0, 3, 4, 6]