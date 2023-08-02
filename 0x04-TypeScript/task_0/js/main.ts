// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location


interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
};

const student1: Student = {

	firstName: "Ada",
	lastName: "Eze",
	age: 10,
	location: "Africa"
};

const student2: Student = {

        firstName: "Obi",
        lastName: "Eze",
        age: 14,
        location: "Africa"
};

const studentList: Student[] = [student1, student2];
console.log(studentList);
