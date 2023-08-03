/*
firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
*/

export interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

/*
Write an interface named Directors that extends Teacher.
It requires an attribute named numberOfReports(number)
*/

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

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

/*
Write a Class named StudentClass:

    The constructor accepts firstName(string) and lastName(string) arguments
    The class has a method named workOnHomework that return the string Currently working
    The class has a method named displayName. It returns the firstName of the student
    The constructor of the class should be described through an Interface
    The class should be described through an Interface
*/
interface IStudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
