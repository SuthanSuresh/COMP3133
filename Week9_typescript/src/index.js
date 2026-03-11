"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
console.log("Week 9 - TypeScript Overview");
console.log(`Student class ----- \n`);
let s1 = new Student_1.default(101, "Mariana");
s1.showStudentDetails();
let s2 = new Student_1.default(102, "Julie", "Smith", 35.0);
s2.showStudentDetails();
//# sourceMappingURL=index.js.map