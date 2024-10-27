"ranajit".toUpperCase(); // touppercase is a funtion
[1, 2, 3].push(4); // push is also a funtion

//non parameterized funtion
{
  func(); //function called
  function func() {
    //function is a keyword
    //segment of code
    console.log("this is nonparameterized function");
  }

  //parameterized function
  func2("ranajit");
  function func2(msg) {
    console.log(`\n${msg} is lonely`);
  }

  //sum
  let x = sum(2, 9);
  console.log(x);
  function sum(a, b) {
    let x = a + b;
    return x; //returns value. code after return statement wont work bcz function is over at return statement
    console.log("h"); // unreacable code
  }

  console.log(concat("ranajit", "hero")); //function with string
  function concat(a, b) {
    let x = a + " " + b;
    return x; //returns value. code after return statement wont work bcz function is over at return statement
    console.log("h"); // unreacable code
  }
}

{
  ///arrow function
  /*
syntax-
const func_name=(para1,para2...)=> //func_name is a var
{
    //code
};*/

  const arrow_sum = (a, b) => {
    console.log(a + b);
  };
  arrow_sum(5, 9);
  console.log(arrow_sum); // the value of arrow sum is funtion
  //here arrowsum is a var. which is storing the whole funtion.
  // this variable works like a function. just add the parameters after the variable name
  //also works with no para.
  //not so useful for big works. mainly used for small works

  //arrow function of multiplication
  const arrow_mul = (a, b) => {
    console.log(a * b);
  };
  arrow_mul(5, 9);
}

{
  //in js funtions can also be passed as an parameter to another function. this is known as callbackfuntion
  a();
  b();
  function a() {
    console.log("hi");
  }
  function b(a) {
    console.log(a);
  }

  //HIGHER ORDER FUNC - these are those functions which takes another function as parameter or returns a function. for example b is a higher order funtion which taking a as parameter
}
