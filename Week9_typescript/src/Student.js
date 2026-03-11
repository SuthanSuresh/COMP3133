"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    studentID;
    firstName;
    lastName = "NA";
    percentage = 0.0;
    // Class properties must be initialized either with default value or using constructor
    constructor(studID, firstName, lastName = "NA", percentage = 0.0) {
        this.studentID = studID;
        this.firstName = firstName;
        this.firstName = firstName;
        this.percentage = percentage;
    }
    showStudentDetails() {
        console.log("Student ID : ", this.studentID);
        console.log("Name : ", this.firstName, " ", this.lastName);
        console.log("Percentage : ", this.percentage);
    }
}
exports.default = Student;
//# sourceMappingURL=Student.js.map