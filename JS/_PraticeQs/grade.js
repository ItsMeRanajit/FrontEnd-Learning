let score= 78
let grade
if(score <=100 && score >=90)
    grade = 'A';
else if(score <90 && score >=80)
    grade = 'B';
else if(score <80 && score >=70)
    grade = 'C';
else if(score <7  && score >=60)
    grade = 'D';
else 
    grade = 'F';

console.log("your grade is ", grade)

