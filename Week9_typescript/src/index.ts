import Student from"./Student"
import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";

console.log("Week 9 - TypeScript Overview")

console.log(`Student class ----- \n`);

let s1 = new Student(101, "Mariana");
s1.showStudentDetails();

let s2 = new Student(102, "Julie", "Smith", 35.0);
s2.showStudentDetails();


let n1 : number = 30
n1 = 24
// TypeScript is statically typed language 
// error - mismatched typed
// n1 = "hello"

// any type allows any type of value to be assigned 
let v1 : any
v1 = 11
v1 = 3.0
v1 = "hello"
v1 = null 
v1 = undefined

let E1 = new Employee(101, "Jane", "Doe", "Sales", 6000)
E1.showDetails()

//empID is read only property - cannot be reassigned
// E1.empID = 102
//console.log("Emp Id for E1 : ", E1.empID);

//Error - department is private within Employee class
// console.log("Department for E1 : ", E1.department);
//E1.department ="HR"

console.log("Department for E1 : ", E1.getDepartment);

//Error - salary is protected within Employee class
// console.log("Salary for E1 : ", E1.salary);

console.log("\n PartTimeEmployee ------");
let PTEmp1 = new PartTimeEmployee(102, "John", "Doe", "IT", 40, 35.0)
PTEmp1.showDetails()