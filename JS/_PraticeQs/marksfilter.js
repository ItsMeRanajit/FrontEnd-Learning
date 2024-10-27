let marks = [78, 93, 87, 92, 83, 99, 87, 91, 94, 45, 87, 93, 83];
let high_marks = marks.filter((val) => {
  //   if (val > 90) {
  //     console.log(val);
  //   }
  return val > 90;
});
console.log(high_marks);
