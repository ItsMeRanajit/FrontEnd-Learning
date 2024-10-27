// fetching api means using others resourses or websites by requesting them for some work and they give us some response

//fetch api
//syntax
// let promise = fetch(url, [options]); //asynchronous
// api = application programming interface
const url = "https://uselessfacts.jsph.pl/random.json?language=en";
let btn = document.querySelector("#btn");
let quote1 = document.querySelector("#info");
// fetchimg is done by fetch()  method which uses request and response object
// it reutuns a promise

// let promise = fetch(url);
// console.log(promise);
const getfact = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log(response); // this response returnss response object came from api
  console.log("yoo", response.status); // prints value to represent the status. 200- 299 means everything is okay. if some error happens then some other vlaue will come except 200

  // but here we're getting some object like things in response from the api. to get the actual response we use some ways to do so...

  //AJAX - asuchronous js and xml . previously datas are responded in xml format . but in modern time these are in json format.

  //JSON - javascripy object notation. this means the data sent by apis are in javascript object form. thats why the  data looks like objects . but it is not a actual object, just it looks like a object

  //so those apis which returns js object we can call those AJAJ - asynchronous js ans json. but we also call it  AJAX instead of AJAJ even though xml are not being used

  // the reponse which looks like object we need to convert it in actual object

  //json() method :  it is also asyncghronous. it returns a 2nd promise(1st one by fetch method). here input is json and output is js object

  let data = await response.json();
  // making the response in a js object
  console.log(data);
  //here the data is usble data. and various infos are there in dsata object

  //an object is given . this is our usble data
  console.log(data.text);
  // in object the info that we need is in text section of data object . so weare printing the text

  quote1.innerText = data.text;
};
(() => {
  getfact();
})();

const getfact2 = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote1.innerText = data.text;
    });
};

btn.addEventListener("click", getfact2);
