// try catch
// try{
//     main code
// }
// catch(err){
//       console.log(err) // printing the error details
// }
// here err is a variable in catch . if any error happns in try then that error is passed in catch as an object. and the variable holds/catches the error object and prints it exactly what is the error.as the response code we can write anything

try {
  let a = 6;
  let b = 8;
  console.log(a);
  console.log(b);
  console.log(a + b);
  console.log(a - b);
  console.log(a - c); //error
  console.log(a * b);
} catch (err) {
  console.log("hi its an error-----", err);
}
//here because of the error the next code wasnt excecuted even though there arent any errors. to tackle with this we use try catch blocks.
