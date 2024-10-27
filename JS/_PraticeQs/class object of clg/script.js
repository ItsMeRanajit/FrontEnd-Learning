class User {
  constructor(Name, email) {
    this.Name = Name;
    this.email = email;
  }

  viewdata() {
    console.log("the name of the user is ", this.Name, "and email is ", this.email);
  }
}

class student extends User {
  constructor(roll) {
    super("Ranajit", "ranajit@one");
    this.roll = roll;
  }
  viewdata() {
    console.log("the name of the user is ", this.Name, "and email is ", this.email, "and roll is ", this.roll);
  }
}

class teacher extends User {
  constructor(salary) {
    super("aman", "aman@one");
    this.salary = salary;
  }
  viewdata() {
    console.log("the name of the teacher is ", this.Name, "and email is ", this.email, "and salary is ", this.salary);
  }
}

class admin extends User {
  constructor(Name, email) {
    super(Name, email);
  }
  editdata() {
    super.viewdata();
  }
}
let student1 = new student(45);
let teacher1 = new teacher(40000);
let admin1 = new admin("newname", "newemail");
student1.viewdata();
teacher1.viewdata();
