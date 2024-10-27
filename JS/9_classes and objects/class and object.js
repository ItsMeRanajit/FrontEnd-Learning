// object creation method 1
const student = {
  neme1: "ranajit das",
  marks: 80,
  printmarks: function print() {
    console.log(this.marks);
  },
};
//every object contains another object that is predefined called prototype. it contains some properties.

// explaination --
let array = ["apple", "orange", "banana"];
// see in we all know array is an object. so itll also contains prototype object. in an array theres some predefined function such as push, slice, splice etc.so all these properties are hold by prototype object of array object.
// we can set any prototype by a syntax i.e. __proto__

//example of __proto__
const employee = {
  tax1() {
    console.log("10% tax deducted");
  },
  //we can also define a funtion like this in and object
};
const me = {
  salary: 70000,
  tax1() {
    console.log("20% tax deducted");
  },
};

me.__proto__ = employee;
//like this we set the employee object as the prototype of me object.how we can use the properties of employee in me.
//if we print me and see the prototype we can see the employee in the prototype.
//so when ever a new object is created and we need to use other objects property on it then we can directly set prototype.
const you = {
  salary: 70000,
};
you.__proto__ = employee;

const you_again = {
  salary: 70000,
};
you_again.__proto__ = me;
//here we used the property of me in you_again . so itll have the property of employee as well as me

//in me the same funtion is defined aggain as employee. so when me object is called then the funtion of me is activated and when emp is called then func of emp is activated.  even though in me the same funtion is there in prototype.// means whenever same object is created in both object the funtion of the own object is more preffered than the prototype one.

//class
//classes have some variables and funtions

class Car {
  constructor() {
    console.log("this is a constructor ");
  }
  start() {
    console.log("car started");
  }
  stop() {
    console.log("car stopped");
  }
  setbrand(brand) {
    this.brandname = brand;
  }
}
//object creation for class
let lambo = new Car(); // here constructor is called
lambo.setbrand("lamborghini");
//like a method calling.

//constructor helps  to initialize a object and assign some properties to the object
// is has to be called in the class. if no constructor is created then a default constructor is created by js to initialize the object
class Car2 {
  constructor(brand, milage) {
    this.brand = brand;
    this.milage = milage;
    console.log("this is a constructor ");
    console.log("the brand is ", this.brand);
    console.log("the milage is ", this.milage);
  }
  start() {
    console.log("car started");
  }
  stop() {
    console.log("car stopped");
  }
  setbrand(brand) {
    this.brandname = brand;
  }
}
let audi = new Car2("audi"); //parameterized constructor
let kia = new Car2(); //if no parameter is passed then simply it would print undefined, bcz theres no value in brand parameter
//but we can simply write kia.brand ='kia' in console then it will set
let toyota = new Car2("toyota", 12); //multiple parameters
