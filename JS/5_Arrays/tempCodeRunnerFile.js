let array = ["ranajit","anisha","happy"]
let num  = [ 11,2,3,5,3,4.5]


console.log(array,array.length)
console.log(typeof num)// type of array is object
// console.log(array[0 ])


num[0]=73


console.log('printed at once ',num)//prints complete array
console.log("printed with loop --")


for ( let i= 0 ; i< array.length; i++)
    console.log(array[i])


for ( let i of array){
    console.log(i.toUpperCase())// printed with for of
}

//Array methods
// push() : add to the end  
// pop() : delete from the end and return
// toString() : converts array to string21yugg
let veggies = ["alu", "potol","kumro", "tomato"]
veggies.push("dharos")//add element to the end 
console.log(veggies)     


let del_item=veggies.pop();// deletes end element and returns. which we are storing in a var
console.log(veggies)
console.log(del_item)

num.toString();
console.log(num)