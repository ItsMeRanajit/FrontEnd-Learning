let btn = document.querySelector("button");
let mode = "light";
btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    btn.innerText = "Click me to turn on dark mode";

    // console.log(mode);
  } else {
    mode = "light";
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    btn.innerText = "Click me to turn on light mode";
    // console.log(mode);
  }
});
