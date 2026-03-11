export default class Student{
    studentID: number
    firstName: string
    lastName: string = "NA"
    percentage: number = 0.0

    // Class properties must be initialized either with default value or using constructor

    constructor(studID : number, firstName : string, lastName : string = "NA", percentage : number = 0.0){
        this.studentID = studID
        this.firstName = firstName
        this.lastName = lastName
        this.percentage= percentage
    }

    showStudentDetails(){
        console.log("Student ID : ", this.studentID);
        console.log("Name : ", this.firstName, " ", this.lastName);
        console.log("Percentage : ", this.percentage);
    }

}