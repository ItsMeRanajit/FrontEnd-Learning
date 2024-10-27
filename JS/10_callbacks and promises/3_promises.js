//  promises are a object in js
//each promise either rejected or resolved/success
// syntax - ler promise = new Promise ((resolve,reject)=>{...})
//resolve and reject are callbacks provided by js

//promises have 3 states pending (working on it), resolved(success),reject

let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve("success"); // deciding that promise fullfilled and if fullfiled then print msg in it
});

let promise2 = new Promise((resolve, reject) => {
  console.log("i am a promise");
  reject("reject 123"); // deciding that promise reject and if rejected with print msg in it
});

//like this we can decide if the promise is success or reject
//APIs returns some promises
function getdata2(data, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data is ", data);
      if (getnextdata) {
        getnextdata();
      }
    }, 6000);
  });
}
getdata2(7, () => {
  getdata2(70);
});
// apis after returning any promises it resolves the promise
//like we did in the program

// we can do things if the promise is successed and if it rejected by promise.then() and promise.catch()

//promise.then is for fullfilled and promise.catch is for reject

const getpromise = () => {
  return new Promise((resolve, reject) => {
    console.log("promise recived");
    resolve(" promise fullfilled");
    // reject(" promise rejected");
  });
};
let promise3 = getpromise();
promise3.then((res) => {
  // resolve holds the resolve massage passsed from the promise
  //if resolve is called in promise  then this will be called
  console.log("from .then", res);
});
promise3.catch((rej) => {
  console.log("from catch", rej);
}); // if reject is called then this
