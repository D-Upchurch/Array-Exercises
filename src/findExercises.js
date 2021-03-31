import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)

export const getStudentById = (id) => {
    let foundStudentById = students.find(student => student.id === id)
    return foundStudentById;
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)

export const getInstructorById = (id) => {
    let foundInstructorById = instructors.find(instructor => instructor.id === id)
    return foundInstructorById;
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")

export const getStudentByLastName = (lastName) => {
    let foundStudentByLastName = students.find(student => student.lastName.toLowerCase() === lastName.toLowerCase())
    return foundStudentByLastName;
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")

export const getStudentByName = (fullName) => {
    let fullNameSplit = fullName.split(" ")
    let foundStudentByFullTime = students.find(student => student.firstName.toLowerCase() === fullNameSplit[0].toLowerCase() && student.lastName.toLowerCase() === fullNameSplit[1].toLowerCase())
    return foundStudentByFullTime;
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long

export const getInstructorOfStudent = (studentId) => {
    let foundStudent = getStudentById(studentId)
    let foundInstructorByStudentId = instructors.find(instructor => instructor.id === foundStudent.instructorId)
    return foundInstructorByStudentId
};

// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate

let totalLanguages = 0
let stud = {}
const mostLanguages = (student) => {
    if(student.languages.length > totalLanguages){
        totalLanguages = student.languages.length
        stud = student
    }
}

export const getStudentWithMostLangs = () => {
    students.forEach(mostLanguages)
    return stud
}
