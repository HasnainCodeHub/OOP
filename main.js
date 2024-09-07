"use strict";
// //===================== Object Oriented Programming ===========================
class Home {
    constructor(name, address) {
        this.LandLord = "Azeem Uddin";
        this.Address = "R210";
        this.NumberOfRooms = 7;
        this.LandLord = name;
        this.Address = address;
    }
    bell() {
        console.log("Knock Knock!");
    }
    airConditioning() {
        setTimeout(() => {
            console.log("Installed AC "); // we use settimeout bcz we want to intalled Ac after 3 sec
        }, 3000);
        {
        }
    }
    furniture() {
        console.log("Complete Furniture");
    }
}
let Home1 = new Home("Azeem Uddin", "R210");
// Home1.LandLord = "hasnain ali"                      //Error bcz we use readonly property which dont allow to assign another value
console.log(Home1);
Home1.bell(); //A function Which we create to Add bell ring in this home
let home2 = new Home("Shahnaz Azeem", "R211");
let home3 = new Home("Laiba Azeem", "R212");
console.log(home3);
home3.furniture(); //Laiba Demands House with complete Furniture
home2.NumberOfRooms = 5; // Client Demand 5 rooms only so we can change the num of rooms
console.log(home2);
home2.airConditioning(); //A function is for installing AC in this Home
/* Pillers In Objects And Extending/Inheriting */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//now we make another class for extending person on it
class Student extends Person {
    constructor(name, age, RollNo) {
        super(name, age); //super is a function use to inherit person class properties and use only before this .
        this.RollNumber = RollNo;
    }
    introduction() {
        return `My Name is ${this.name} And I am ${this.age} Year Old and my rollNumber is ${this.RollNumber}`;
    }
}
let student1 = new Student("Hasnain Ali", 19, 22604);
console.log(student1.introduction());
// Now we inherit person class into a teacher class
class Teacher extends Person {
    constructor(name, age, qualif, salary) {
        super(name, age); //super is a function use to inherit person class properties and use only before this.
        this.secret = 1234;
        this.salary = salary;
        this.age = age;
        this.name = name;
        this.qualification = qualif;
    }
    //===================Methods=====================
    introduction() {
        return `My Name is ${this.name} I am ${this.age} Years Old And I have ${this.qualification} Degree `;
    }
    getsalary(secret) {
        if (secret == this.secret) {
            console.log(`And My Salary Is ${this.salary}`);
        }
        else {
            console.log("Chalo Niklo!");
        }
    }
}
let teacher1 = new Teacher("Hamzah", 25, "Masters In IT", 100000);
console.log(teacher1.introduction());
teacher1.getsalary(1234);
class Circle {
    draw() {
        console.log("Drawing");
    }
    color() {
        console.log("Coloring");
    }
}
class Triangle {
    draw() {
        console.log("Drawing");
    }
    color() {
        console.log("Coloring");
    }
}
let circle = new Circle();
console.log(circle.color());
circle.draw();
let triangle = new Triangle();
console.log(triangle.draw());
triangle.color();
