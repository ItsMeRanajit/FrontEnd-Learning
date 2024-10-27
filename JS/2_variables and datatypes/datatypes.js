/*  dataypes--

1) premitive datatypes(7)-- (premade datatypes provided in js)

string
boolean (true / false )
number
undefined
null
bigint (large size integer )
symbol

2) non premitive datatypes -- ( made by users )

object 
funtions 
arrays */

{
    let a=Number('6')
    console.log(a);
    
    let b= Boolean('true')
    console.log(b)

    let c = BigInt('32937247984')//cannot be fraction
    console.log(c)

    let d = Symbol('d')
    console.log(d)
}
