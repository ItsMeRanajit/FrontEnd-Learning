//you know what is inheritance
//accessing/inheriting all properties of one class by another class
//                      class parent{

//                      }
//                      class child extends parent{
//                       this class also have all access    of funtion and variables of parent
//                             }
class parent {
  massage() {
    console.log("hi this is parent");
  }
}
class child extends parent {
  massage1() {
    console.log("hi im child and also ");
  }
}

let obj = new child();

//ex 2
class person {
  constructor(name) {
    this.name = name;
    console.log("this is a person", this.name);
  }
  sleep() {
    console.log("person sleeping");
  }
  eat() {
    console.log("perosn eating");
  }
}
class engineer extends person {
  constructor(branch) {
    console.log("entered engineer");
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("the branch is ", this.branch);
    // super.eat(); we can also call parents method from childs constructor but i think we cant do viceversa
  }
  work() {
    super.eat(); //accessing parents method from inside of childs method. trying to excecute the eat function of parent before work
    console.log("engineer working");
  }
  think() {
    console.log("engineer thinking what to do in future");
  }
  sleep() {
    console.log("engineer doesnot sleep"); //method overridden, but only when engineer is called. for other extended classes it wont work
  }
}

class doctor extends person {
  constructor(name) {
    console.log("entered doctor");
    super(name); //to invoke parent class constructor
    this.name = name;
    console.log("the name is ", this.name);
  }
  work() {
    console.log("doctor working");
  }

  treat() {
    console.log("doctor treating patients");
  }
  sleep() {
    console.log("doctor sleeping");
  }
}
let me1 = new engineer("cs");
let me2 = new doctor("someone");

//use of super : used to call the constructor and method of parent from child
// if we make a constructor of a child then itll give and error. to avoid this we have to call parents constructor (before using this. and exit from constructor) from child using super(); shown in engineer
// to pass any value from child to parent constructor we can simply pass the value through super(value); shown in doctor
//we cannot call super outside of a method or constructor
