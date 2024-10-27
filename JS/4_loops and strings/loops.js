// for loop
for( let i = 1 ; i<= 5;){
    console.log(i)
    i++
}
//console.log(i)
// here i wont work because i was decleared inside the scope of the loop . and we are trying to print i outside that scope


//while loop
 let a= 10
 while (a>=1){
    console.log(a);
    a--;
 }

{
 //do while
 let b= 30
 do{
    console.log(b)
    b--
 }while(b>=25);
}
 //for of loop & for in loop

 // these types of loop helps to iterate some specific datatypes


 //like for of loop helps to iterate on strings and arrays
 //syntax - for(let var of strval){ code... }
{
 let clg = 'hoogly IIT'
 let length=0
 for (let i of clg)
 {
    console.log(i)
    length++;
 }
 console.log(length)
}

// for in loop used to iterate through object
let me ={
    Name : ' Ranajit Das',
    age : 23,
    cgpa : 8.3
}
console.log(me)
// syntax - for ( let var in objname)
for (let i in me){
    console.log(i, me[i]);
}