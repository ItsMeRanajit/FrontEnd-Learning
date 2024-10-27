//window is a global object created by browser. and most of the funtion and methods of the js are included in this object. bcz it is a global object so we dont have to mention it to use its funtions
console.log(window);
// what is DOM?(document object model)
// the whole code of html as well as the details can be accessed in js as a object. and object is commonly known as document. and this document is a part of window object.
// this document object holds every type of detail (such as body ,head , tags in body etc.) of the html file and can be accessed by js. so modification on html can be done by modifying some properties of doucment.

//to fetch this document or oject(html code details) we use console.dir(window.document) that prints all the details of html code
console.dir(document);
console.dir(document.body); // accessing the body of document object
console.dir(document.head); //accessing the head

//so this dom , document helps to change some properties of the code at runtime.
//say we want to change the background color after just clcking a button. here we cant change the original file to change the background color bcz it is happening in runtime of the site . we need to change it dynamicaally. bcz we can directly access the html directly from js and manipulate it so we can implement it by js .
document.body.style.background = "lightgreen";
//like here we excecuted it dynamically without changing anything in html file. and this changes can be set for some conditions.
// here we at first targetted the document , then the body object of the document like before, then on that body object we target the style on which we changed the backgrnd clr.
// and also here we can also add window before document. but bcz window is a global object and every element of js has the access of window  thats why no need to write it.

// let pr = prompt("enter 1 for redish background");
let pr = 1;
if (pr == 1) {
  window.document.body.style.background = "lightcoral";

  //we've written window but it is the same
}
//like here we changed the backgrd clr based on a condition

document.body.childNodes[3].style.background = "yellow";
document.body.childNodes[3].innerText = "yellow";
//childnodes are the array of tags of html. so by the proper index we target the h4 tag and changed its backgrd
//similarly in the next one we target h4 and changed the content by the help of innerText

// imp - why we should write script in body?
// if we add script in head then the script is loaded before the body bcz of this the dom elements or the contect of bosy are not accessable and document.body holds null
