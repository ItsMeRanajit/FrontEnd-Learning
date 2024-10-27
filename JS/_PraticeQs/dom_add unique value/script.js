let h = document.querySelectorAll("div");
console.log(h[0]);
let idx = 0;
for (let i of h) {
  i.innerText = `this is unique value ${idx}`; // i containing each div
  idx++;
}
