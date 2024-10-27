//creation
let str = "Ranajit Das"
let str2='Anisha Chakraborty'
{
console.log(str)
console.log('length function-',str.length)// inbuilt feature for strings to find length

console.log(str2[0])// printing specific position of the string

console.log(str.charAt(9))// using charAt funtion to print character at specific position


console.log('substring function-',str2.substring(0,6))// prints the specific portion of string based on the index

console.log('substring without end index-',str2.substring(7))// no need to mention the end index itll take automatically

// str.slice("start index","end index") - this also works same as substring
}



{
//there is another method to create strings
// Using TEMPLATE LITERALS
 let temp = `template literals`// let s = `--string`

 //adv - it helps to print a massage with some string values.
 // in general to print a massage with some string or other values we write a massage and end the massage then write the string var after placing a comma like
 console.log("thats how we normally do -", str2)

 // but in a temp. lit. we do not need to end the massage . we can include the str var in the massage like,
 console.log(`in temp. lit. --- ${temp}\n\tthe value is caluculated in the brakcets ${1+2+3}`)
 //included string in console.log(`... ${str}...`) . and any non string value is automatically converted in a string in temp. lit.

}
 //  \n gives nextline
 //  \t gives tabspace
 // \n or \t are counted as 1 charcter



{
 //String methods. helps to manipulate strings but the original string is not manipulated instead a new modified string is made

 console.log(str.toUpperCase(str))// makes all the character to uppercase

 console.log(str.toLowerCase(str))// makes all the character to lowercase

 let str3= "    removed    "
 console.log(str3.trim())// removes all the spaces at front and end . doesnot removes the spaces at middle

{
 console.log(str.concat(" likes ",str2))//joins str 2 with str1. and also some additional strings if needed
 console.log(str.concat(str2))//normal
 console.log(str.concat(" likes ",str2,str3))//with more strings
}
{
console.log(str.replace('Rana','hero'))// replaces a metioned part with new. str.replace("element","new element")
console.log(str.replaceAll("a","o"))//normally the replacement is done only one time. but when replaceAll is used every time will be replaced whenever the element is matched
}
}