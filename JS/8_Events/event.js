// event is concept where we can trigger specific workss by clicking any buttons or clicking or typing or something like that. this response is known as event handling
//mouse events - click, double click
//keyboard ''   - keypress,keyup,keydown
//form events - submit
//print etc...
let hvr = document.querySelector("#btn");
hvr.onclick = () => {
  console.log("button is clicked");
  let a = 24;
  console.log(a);
};
//this is the syntax of writing a event funtion
hvr = document.querySelector("div");
hvr.onmouseover = () => {
  console.log("it is div form js");
};
//priority -- js > inline

//event object--holds the details of the event\

hvr.onmouseover = (evt) => {
  //this evt is event object.and have all detail about this event
  console.log("it is div form js");
  console.log(evt); //this event object hols the type of event(mouseever) the position of the event(clientX,clientY) , target where the event has occured etc.
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

//inline event handlers has the drawback of it makes the html code bulky
// event handling using functions has a drawback that we can write only one function to handle the event or else itll be overwritten to solve the problems we use event listeners --

//event listeners-- we can create multiple event listeners
//event- click/doubleclick etc and callback is funtion which is passed as arguments.callback in this case also known as handlers

// node.addEventListener(event,callback)
hvr = document.querySelector("div");
hvr.addEventListener("click", () => {
  console.log("hello! this is event listener");
});
hvr = document.querySelector("div");
hvr.addEventListener("dblclick", function fun(evt) {
  console.log("hello! this is event listener -2");
  console.log(evt, evt.type);
}); //using normal funtion

//to remove event listener
//node.removeEventListener(event,callback)

//in the callback part we need to put the exact same refence of add eventlisner or else it wont work. but if we just write the same funtin it willnot work ,bcz the funtion in remove and funtin in add points different memort location , it has to point the same lication.
//so we have to store the function in a varible using arrow funtion or directly pass the funtion in both. follow as below
const fun = (evt) => {
  console.log("hello! this is event listener -2");
  console.log(evt, evt.type);
};
hvr.addEventListener("dblclick", fun);
hvr.removeEventListener("dblclick", fun); //it is removed
