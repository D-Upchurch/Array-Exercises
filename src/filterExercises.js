import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort

export const getStudentsInCohort = (cohort) => {
    let filterCohort = students.filter(student => student.cohort === cohort)
        return filterCohort;
};


// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
    let filterFullTime = students.filter(student => student.fullTime === true) 
        return filterFullTime;
}

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (instructorId) => {
    let filterInstructorId = students.filter(student => student.instructorId === instructorId)
    return filterInstructorId;
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents = (languageCount) => {
    let filterPolyglot = students.filter(student => student.languages.length >= languageCount)
    return filterPolyglot;
}

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
const activeInstructors = () => {
    let instructorArr = students.map(student => {
        return student.instructorId
    })
    return instructorArr;
}

export const getAvailableInstructors = () => {
   let instructorArray = activeInstructors()
   console.log(instructorArray)
    let filterAvailableInstructors = instructors.filter(instructor => !instructorArray.includes(instructor.id))
    return filterAvailableInstructors;
}
getAvailableInstructors();

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method


export const getStudentsByLanguage = (language) => {
let studentLanguage = students.filter(student => student.languages.some(item => item === language))
return studentLanguage;
}

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
