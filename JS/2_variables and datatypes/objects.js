//arrays and funitons are also the categories of objects
// not so similar like java
// it is a collection of values 

// method to creating object

const student = // generally objects are the type of const but let can also be used
{     
    fullname : "Ranajit Das",   
    age: 20,                    
    dept : "cse",               
    cgpa : 9.2,                 
    isPass: true

};
console.log('type of object is -',typeof student)//type is object
console.log('type of the key of the obj is -',typeof student.age)//type of the key

// every object consits keys and values. keys are the var names in obj and values are assigned to the keys. 
// its like  key : value


//accessing perticular key--
console.log(student['fullname'])
//or
console.log(student.dept,'and',student.cgpa)


//values can be updated or modified directly from outside
student.age = student.age +2
console.log('updated value/age ',student.age)

//the object is const but also we can update it. because the object is const not the keys. the keys can be updated not the address of the object or the contents of the objects