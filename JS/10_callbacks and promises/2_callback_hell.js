function getdata(data) {
  setTimeout(() => {
    console.log("data is ", data);
  }, 1000);
}
getdata(789);
getdata(780);
//here all data will come at once bcz once 789 is ex. then it takes a delay of 1s and ex. the second line so 780 is also started ex imediately. so the timer of them ends at once
//but we want once 789 is printed it again takes a 1s delay to print 780. to do this we need callbacks
function getdata2(data, getnextdata) {
  setTimeout(() => {
    console.log("data is ", data);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}
getdata2(789, () => {
  getdata2(780);
});
// here we passed one data 789 and passed another data as a funtion using callback which is held by getnextdata.
//so once 789 goes then it prints the data.and another data goes to getnextdata which holds the same function as getdata so it takes another 2s time.
// but we passed other data in an arrow func. bcz if we wrote getdata2(780) this means we calling a func . but we need to pass the function so we created a arrow func which is passed as an argument
// the if is added bcz one error will occur bcz outer getdata2 has 2 arguments but inner one has only one. so the if means only if the 2nd argument exists only then the getnextdata will be called otherwise not and will hold undefined
getdata2(781, () => {
  getdata2(782, () => {
    getdata2(783);
  });
});
//printing 3 datas
// but approaching this method makes to code veeery difficult to understand
//this is known as callback hell. each callback has another call back in it
//781 has 782, 782 has 783 making a nested callbacks, a pyramid strcuture which is known as pyramid of doom

//to solve this callback hell we use promises

// /// the call back funtion on above is done using promise chianing
function getdata2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data is ", data);
      resolve("succeded");
    }, 2000);
  });
}

console.log("fetching 1");
getdata2(1).then((res) => {
  console.log("fetching 2...");
  getdata2(2).then((res) => {
    console.log(res);
  });
});

// solving that problem using async await
async function call() {
  // console.log("fetching data 100...");
  // await getdata2(100);
  // console.log("fetching data 200...");
  // await getdata2(200);
  for (let i = 0; i <= 10; i++) {
    console.log("fetching data ", i, "...");
    await getdata2(i);
  }
}
call();