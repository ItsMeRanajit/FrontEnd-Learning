let array = ["ranajit", "anisha", "happy"];
let num = [11, 2, 3, 5, 3, 4.5];

console.log(array, array.length);
console.log(typeof num); // type of array is object
// console.log(array[0 ])

num[0] = 73;

console.log("printed at once ", num); //prints complete array
console.log("printed with loop --");

for (let i = 0; i < array.length; i++) console.log(array[i]);

for (let i of array) {
  console.log(i.toUpperCase()); // printed with for of
}
//we cannot directly add touppercase to an array. it worked bcz we are targetting each string of the array

//Array methods
// push() : add to the end
// pop() : delete from the end and return
// toString() : converts array to string
//concat() : joins arrays
//unshift() : adds element at the start of the array
//shift() : deletes elements from beginning and returns
//slice(startindx,endindx) : prints that partof the array. doesnot change the original array
//splice(startindx,del_count,new_element) : deletes elements from the starting index to the given count and (optional) new element can be added in those position. also returns the del elements

let veggies = ["alu", "potol", "kumro"];
veggies.push("dharos"); //add element to the end
console.log(veggies);
// console.log(veggies.push("dharos"))// this will return the size of the array

let del_item = veggies.pop(); // deletes end element and returns. which we are storing in a var
console.log(veggies);
console.log(del_item);

console.log("to String", num.toString()); //made new strring array of num values

let a = num.toString(); //also can store the string array in other array
console.log(a);

let arr1 = veggies.concat(array);
console.log(arr1);
console.log(veggies.concat(num, array)); // multiple arrays concatinated

veggies.unshift("begun"); //adds element at the start
console.log(veggies);
console.log(veggies.shift()); //returns the val and deletes from start

console.log(arr1.slice(0, 5));
let arr2 = arr1.slice(3, 5); //stored in new array
console.log(arr2);

arr1.splice(0, 3, "happy", "happy", "happy", "happy"); //many more element can be added
console.log(arr1);

arr1.splice(3, 0, "loves each other"); // also works to add a  element in between array in a specific indx by giving the count as 0

console.log(arr1);
arr1.splice(3, 1);
console.log(arr1); // or it can also work to delete or replace an element in between an array.like here we deleted an element from middle.
arr1.splice(3, 1, "loves each other"); //replaced element at 3rd indx
console.log(arr1);
// SPLICE is a good method. we can do delete an element, add element, replace element , bulk adding anywhere, bulk delete

// some funcions modifiying the array directly and some creating the modified version of the array. you'll understand which one is creating new and which one directly modifying

// and all funtions that deletes element , returns the deleted element and directly modfides the array not making a new one
