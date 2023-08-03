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

const divElement = document.createElement('div');
divElement.id = 'myDiv';
divElement.textContent = 'Table rendered with vanilla Javascript';
document.body.appendChild(divElement);

const table = document.createElement('table');
table.id = 'studentTable';
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const trHeader = document.createElement('tr');
thead.appendChild(trHeader);
for (const key in student1) {
  const th = document.createElement('th');
  trHeader.appendChild(th);
  th.textContent = key;
}

for (const student of studentList) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for (const key of Object.keys(student) as (keyof Student)[]) {
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = String(student[key]); // or td.textContent = student[key].toString();
  }
}