// async wait >> promise chains >> callback hell

//synchronous code = each line excecuted one after one in sequence
// asynchronous code = the code doesnot run sequentially for some comdition under some circumtances
{
  function hello() {
    console.log("hello");
  }
  setTimeout(hello, 2000); //set timeout(helps to make a code asynchronous)
  //function hello is called after 3000ms

  //OR
  console.log("1");
  console.log("2");

  setTimeout(() => {
    //bcz js makes it run parallely with the normal code. that makes it asynchronous
    console.log("hello again");
  }, 4000);

  console.log("3"); //this line will not be affected by settimeout and itll excecute. so it made the code asychronous
}
{
  //call back -- passing a function as an argument
  function sum(a, b) {
    console.log(a + b);
  }
  function calculator(a, b, sumcallback) {
    sumcallback(a, b);
  }
  calculator(1, 6, sum);
  //here sum is passed as an argument. which is caught by sumballback. means sumcallback holds the same function as sum
  //  calculator(1,2,sum()) : this is invalid bcz giving () means we calling the func. then and there. but in real were passing a funtion as a argument,not calling directly.

  //you can also define a funtion here
  calculator(2, 5, (a, b) => {
    console.log(a + b);
  });

  //callback hell
  //nested callbacks: makes difficult to understand the code
}
