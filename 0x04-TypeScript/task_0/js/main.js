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
console.log(studentList);
function renderTable() {
    var tableBody = document.querySelector("#studentTable tbody");
    for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
        var student = studentList_1[_i];
        var newRow = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        newRow.appendChild(firstNameCell);
        newRow.appendChild(locationCell);
        tableBody.appendChild(newRow);
    }
}
renderTable();
