let arr = [1, 2, 3, 4, 5, "yo"];
{
  //foreach method----------

  // syntax - array.foreach(callbackfuntion )
  // it is a function to execute for each element in the array. the function inside the bracs is excecuted for each element of an array
  //we can also define the callbackfuntion inside there like shown below
  arr.forEach(function printval(v, idx, arr) {
    console.log(v, idx, arr, "foreach");
  });

  //here the printval funtion is also defined here. so the printval fuction will exccecute for each element in an array
  //the parameter of the callbackfunction here canhave 3 types which returns the detail about array, are - value,index,whole array in different variable

  //foreach are only can be used for arrays not for strings or other
}
arr.pop();
{
  //map----
  //works same as foreach but it can also make a new array at the end with the return values
  //   syntax - let new_array_var = arr.map(callbackfunc(value,index,array)=>{
  //       code...
  //       return val*2;})
  //a new array will be stored in new_array_var

  arr.map((val) => {
    console.log(val);
  }); // working without any funtion name but foreach wont work like this.if funtion name is used function define is done then the funtion cant be arrowfuntion . it must be normal function

  let new_arr = arr.map((val) => {
    return val * val;
  });
  console.log(new_arr);

  arr.map(function num(val) {
    console.log(val ** 3);
  });
}

{
  //arr.filter(callbackfuntion) -- this helps to make a new array with the vals of array which are matching any condition
  let even = arr.filter((val) => {
    return val % 2 == 0;
  });
  console.log(even);
}

{
  //arr.reduce(callbackfunc) -- it returns a single value and reduces the array by performing some operations . such as , avg , sum ,min , max etc.
  let sum = arr.reduce((val, result) => {
    return result + val; //val points 1st element and result points 2nd element and 2nd elemet keeps shifting and performing that operation and storing the value to the 1st element (val+=result)
  });
  console.log("sum of arr element is ", sum);

  sum = arr.reduce((val, result) => {
    return result > val ? result : val;
  });
  console.log("largest is ", sum);
}
