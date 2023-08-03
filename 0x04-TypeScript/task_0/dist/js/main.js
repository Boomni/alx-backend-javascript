// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
;
var student1 = {
    firstName: "Ada",
    lastName: "Eze",
    age: 10,
    location: "Africa"
};
var student2 = {
    firstName: "Obi",
    lastName: "Eze",
    age: 14,
    location: "Africa"
};
var studentList = [student1, student2];
var divElement = document.createElement('div');
divElement.id = 'myDiv';
divElement.textContent = 'Table rendered with vanilla Javascript';
document.body.appendChild(divElement);
var table = document.createElement('table');
table.id = 'studentTable';
document.body.appendChild(table);
var thead = document.createElement('thead');
table.appendChild(thead);
var trHeader = document.createElement('tr');
thead.appendChild(trHeader);
for (var key in student1) {
    var th = document.createElement('th');
    trHeader.appendChild(th);
    th.textContent = key;
}
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var _a = 0, _b = Object.keys(student); _a < _b.length; _a++) {
        var key = _b[_a];
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = String(student[key]); // or td.textContent = student[key].toString();
    }
}
