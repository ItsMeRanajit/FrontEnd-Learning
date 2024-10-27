function asyncfunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1 loading ...");
      resolve("succed");
    }, 3000);
  });
}
function asyncfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2 loading ...");
      resolve("succeded");
    }, 3000);
  });
}

// console.log("fetching data1");
// let promise4 = asyncfunc();
// promise4.then((res) => {
//   console.log(res);
// });
// fetching only one data1

//to fetch data1 and data2 we need to use promise chain like this. then ( then ( then...))
console.log("fetching data1");
let promise4 = asyncfunc(); // promise is called
promise4.then((res) => {
  // promise is returned for data1
  console.log(res); // till here data 1 is fetch in done
  console.log("fetching data2..."); // now fetchind data2
  let promise5 = asyncfunc2(); // function for data2 is called
  promise5.then((res2) => {
    //function is finished and ex. then
    console.log(res2); // after 2 sec of data1 the data2 is fetched
  });
});
//if data1 fetched only then data2 will be fetched

console.log("fetching data1");
asyncfunc().then((res) => {
  console.log(res);
  console.log("fetching data2...");
  asyncfunc2().then((res2) => {
    console.log(res2);
  });
});
//with out making multiple variables

//this also makes a code a bit messsy if we add more lines to then
// to make it more easier and understandable we use async await

asyncfunc()
  .then(() => {
    return asyncfunc2(); // retuurn async2() means we're calling asyncfuntion 2
  })
  .then(() => {
    // when async2 will fullfilled then this will work
    console.log("work done");
  });
// this is actual promise chain
