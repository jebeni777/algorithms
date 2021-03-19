function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
  
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1 ||
         str[i] === "y" && vowels.indexOf(str[i+1]) === -1) {
        count++
      }
    }
    return count
  }
  
  console.log(countVowels("Hello World"));
  console.log(countVowels(""));
  console.log(countVowels("yes"));
  console.log(countVowels("Howdy World"));
  console.log(countVowels("yellow"));
  console.log(countVowels("Never say never"));