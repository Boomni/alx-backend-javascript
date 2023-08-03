/*
Write a function printTeacher:

    It accepts two arguments firstName and lastName
    It returns the first letter of the firstName and the full lastName
    Example: printTeacher("John", "Doe") -> J. Doe

Write an interface for the function named printTeacherFunction.
*/
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

const teacher: string = printTeacher('Boomni', 'Jonathan');
console.log(teacher);