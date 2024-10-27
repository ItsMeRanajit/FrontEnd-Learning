{
  //selecting element by id
  let h = document.getElementById("heading"); // this returns the head tag. heading is id name
  // console.log(h);
  console.dir(h); // should be written in .dir bcz this is an object
}

{
  // selecting element by class
  h = document.getElementsByClassName("heads");
  console.dir(h);
  // console.log(h);
  //html collection is showing. there are tags with same class name. and elements are arranged having some indexes by which we can target them
  //when no tags have that class then empty html collection will be there
}

{
  // selecting by tag name
  h = document.getElementsByTagName("h2");
  console.dir(h);
  // have the tag name . also makes an indexed html collection of same tag elements
}

{
  // selecting by query selector
  // here we can pass any of them . it can be id / tag name / class. it will detect automatically
  //but it will return only the 1st element of that id/class/tag name.so it is helpful when you are targetting id elements bcz only one id element can be there for a id name

  h = document.querySelector("h2");
  console.dir(h);
}
{
  //to get all element of that same tag/class or id name we use--
  h = document.querySelectorAll("h2");
  console.dir(h);
  // and this returns nodelist not a collection
}
// those methods which returns a single element never makes a collection . like getid , an id can have by one tag. and also for queryslector bcz it only targets 1st matching element .
// but those methods which can access multiple elements of same name like gettag and getclass will always make a collection
{
  //DOM MANIPULATION
  {
    //1. tagname
    h = document.querySelector("button");
    console.dir(h);
    console.dir(h.tagName); //returns the tag name
  }

  {
    //child access
    console.log(document.querySelector("div").lastChild); //this prints the 1st child
    console.log(document.querySelector("div").firstChild); //this prints the lastchild/
    console.log(document.querySelector("div").children); // this retunrs all the children as a collection.
    //we can also access any child from this children property by adding the index of a specific child acc. to the children collection
    console.log(document.querySelector("div").children[0]); //accessing 0th index element of the children collectin

    //there are three types of return elements - text, comments and elements.
    //only on the elements or the tags we actually work
  }

  {
    // 2. innerText // this returns the inner text of the  item and its children
    console.dir(h.innerText); // returns the text content of the element and all its children
    console.log("the inner text items of the div is \n", document.querySelector("div").innerText);

    document.querySelector("div").innerText = "replaced teh code and Added text "; //modifying the content of the tag or element with innertext changes the complete content of the tag , also its children tags are replaced with texts
    //see it by removing and adding this line of code
    console.log("the changed content of the whole div is  \n", document.querySelector("div").innerText);
  }

  {
    // 3. innerHtml // returns the plain code of the html of that tag or element
    console.log("printing the plain html code of div\n", document.querySelector("div").innerHTML);

    document.querySelector("div").innerHTML = " <div>replaced all the element and added new code </div>"; //changning the elements of the div tag with new code . unlike innertext it changes the content with new code not with the texts

    console.log("printing the plain html code of div\n", document.querySelector("div").innerHTML);
  }

  //by doing the modifications it helps to change the content at runtime when user is interacting with the site
  {
    // 3. text content // this also prints the hidden texts of the element
    console.log(document.querySelector("h3").textContent); //showing the hidden element h3 shown in the console
  }
}
