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

