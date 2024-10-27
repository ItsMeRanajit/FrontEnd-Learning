let p = document.createElement("p");
p.innerText = " hey its a paragraph";
p.setAttribute("class", "styles");
p.style.backgroundColor = "lightgreen";
p.style.color = "black";
document.querySelector("div").append(p);
// p.classList(); //class list returns a list of classes set to the element
//to add a class to the class list we use classlist.add
p.classList.add("style2");
//to remove a class use classList.remove("class name")
