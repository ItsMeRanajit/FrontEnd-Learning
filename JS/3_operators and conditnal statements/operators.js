console.log("yep its the 2nd lesson")
let a = 19
let b = 30
console.log("a+b =", a+b)

//operators are - 
//arithmatic opr - +,-,/,*,%,**(power),
//unary operator - ++,--
//assignment opr - =,+=,-=,*=,%=,**=,/=
//comparisn opr - ==,!=,>= etc.
//logical opr - &&,||,!(logical not)
console.log("b**2 =",b**2)
console.log("a++",a++)//post
console.log("++a",++a)//pre
console.log("a != b",a != b)//ture/false

//logical not
console.log('logical not',!(a<b)) // if true makes false and viceversa


console.log("string 30 == b(30)","30" == b)//ture/false
//here one is string and anther is number but in js whenever this situation occurs the stirng is converted in number then it is checked.

//to avoid this we use stricter version of the == and != which are === and !==. here no conversion is done
console.log("string 30 === b", "30"===b)
console.log("string 30 !== b", "30"!==b)