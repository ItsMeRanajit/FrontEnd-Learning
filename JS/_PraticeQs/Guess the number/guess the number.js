// use prompt to take the input
let gameno= 23
let user =prompt('Guess the number :')
while(user!=gameno){
    if(user > gameno){
        user= prompt('Guess a lower number')
    }
    else
        user = prompt('Guess a higher number');
}
console.log("Congratulations You Entered the Right Number")