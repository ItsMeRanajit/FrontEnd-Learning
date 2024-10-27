let n = prompt("Enter a value to make the array");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let sum = arr.reduce((val, result) => {
  return val + result;
});
let factorial = arr.reduce((val, result) => {
  return val * result;
});
console.log(arr);
console.log(`Sum of all the numbers of this array is ${sum}`);
console.log(`factorial of all the numbers of this array is ${factorial}`);
