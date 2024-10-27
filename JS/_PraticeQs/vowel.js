let str = "zindagi na milegi dobara";
let num = 0;
let num1 = 0;
vowelfunc(str.toLowerCase());
vowel_arrow(str.toLowerCase());
// console.log(str.toLowerCase())
function vowelfunc(str1) {
  for (let i of str1) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      num++;
    }
  }
}
console.log(`the number of vowels in ${str} are ${num}`);

//arrow func
function vowel_arrow(str1) {
  for (let i of str1) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      num1++;
    }
  }
}
console.log(`the number of vowels in ${str} are ${num1}`);
