let num = 12;

console.log(num.toFixed(2));
// displays only 2 digit (number given)  after point

let frac = 12.89;
console.log(num.toPrecision(3));
//displays the rounded of approximate value. ie. 12.89 to 13. but the number digits before decimal has to be given in brackets neither itll give exponential values

let hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));
//arranges the number according the indian counting system. lakh crore etc. by default it is us style ie. million,hundred etc

//++++++++++ MATH +++++++++++++++++

console.log(Math.abs(-3));
//prints abstract value
console.log(Math.round(5.3));
//prints round off
