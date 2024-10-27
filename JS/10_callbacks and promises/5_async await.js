// async and await is used with a function
// it works for those functions which returns a promise

async function hello() {
  console.log("hello how are you?");
}

//await keyword pauses ex. of its surrounding async function untill the promise is settled (reject/resolve)
// await can only be used inside of a async function

function api() {
  // a promise which returns a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather temparature");
      resolve(200);
    }, 2000);
  });
}

async function call() {
  // a function that calls the api
  // async catches the promise
  await api(); // callling the main api funtion
  // whenever the funtion is called await makes the surrounding code(this async function)stop untill the promise is resolved/rejected

  await api(); // for calling the same funtion 2nd time.
  //so bcz await making the surrounding code (remaining code of this function)stop. so both await arent able to ex. at once.
  // the call function is called.for the 1st api call it ex the api and await waits for the promise to return. till then the other code doesnot work.
  //when it gets the return the next line ex and works the same
}
call();

// but there is a problem that is -
// whenver we are using async and await we have to make a function and call it like call() . it is unneccessary

// to solve this we use IIFE - imediately invoked funtion expression
// it is a type of funtion that ex imediately and doesnot need to call it. and it can be called only once. to call it multiple times we need to write the whole thing again and again
// syntax --
//  ( any function(){...} )();
//here the funtion can be a normal function or a arrow funtion or async funtion

(async () => {
  await api();
  await api();
})();
//like we used a async arrow func
