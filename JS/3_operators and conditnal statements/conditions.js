// if else
let age= 25
if(age > 18){
    console.log("you can vote bcz you are above 18")
}

let mode = 'dar'
let color
if(mode ==="dark")
    color='black'

else if(mode === 'light')
    color='white'

else    
    color="any"

console.log(color)


//ternary opr
let eligible = age > 18 ? 'yes':'no'
console.log('he/she is eligible ?' ,eligible)

age=undefined
// age=null
age > 18 ? console.log('okay'): console.log('not okay')
//if the var is null/undefined then it is always false


state = false
state ? console.log("on"):console.log("off"); //no conditon matches true or false