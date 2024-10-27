{
  let d = document.querySelector("div");
  console.log(d);
  let id = d.getAttribute("id"); //this will return that attribute value of any attribute
  console.log("the id of the div is -", id);
  d.setAttribute("id", "one"); // (attr name , new val)
  // this sets a new value to the attribute
  //check it from the elements in browser

  //node.style -- this directly makes changes to the elements
  d.style.backgroundColor = "aqua";
  //what ever is the property name in css . in here we use the same name but in camel case. say font-size , itll ve fontSize
  d.style.fontSize = "18px";
  d.innerText = "Hii!"; // this overwritten all the content of div including p tag
  d.style.textAlign = "center";
}
{
  // insert element -- new tag will be created not directly addeed
  let t = document.createElement("button"); //crated button
  t.innerText = "tap here";
  console.dir(t);

  let text = document.createTextNode("hi im added text using appendchild"); //this creates a text instead of a tag and this can be added into selected tags in same way

  document.createComment("this is comment"); // thats how we can create comment and can be added like the other. itll create a html comment

  //now element or text is created. and we have to add that element somewhere in html. to do so we have few methods

  //1.  node.append(element)--adds the element at the end of the node
  let add = document.querySelector("div");
  add.append(t);
  add.appendChild(text);
  // in append()we can append multiple elements at once like add.append(text,2nd_ele,...). it is mordern method
  //theres a one more method that is appendchild(). by this we can append only one element at a time.

  //2.node.prepend(ele)-- adds at start
  add.prepend(t);

  //3.node.before()-- adds element before the selected element. so button will be added not in the start of div , itll be added before the div
  add.before(t);

  //4.node.after()-- adds element after the selected element
  add.after(t);

  let head = document.createElement("h1");
  head.innerHTML = "<i> this is my heading</i>";
  document.querySelector("body").prepend(head);

  //5. insertBefore(new ele, childnode indx/node reference) -- adds before the specific indx/reference given
  let bef = document.createElement("span");
  bef.innerText = "added with insertBefore and im span\n";
  add.insertBefore(bef, add.childNodes[0]); // we can insert a element before any element inside a selected element. insertBefore(new element, sel_ele.childNodes[indx]) put the index of the element before which you want to add. means if [0] is given then itll be added at first
  //delete element -
  //node.remove(); [nothing in brackets]-- which element you want to delete. remove();

  // document.querySelector("#two").remove();
  //theres also removechild(""). in here we need to specify the node which to delete in the brackets and the parent before. the syntax will be--
  //document.querySelector("body").removeChild(document.querySelector("#two")); -- 1st selected the parent then the child in brackets

  //remove is a mordern way. we donot need to add anything in remove();
}
