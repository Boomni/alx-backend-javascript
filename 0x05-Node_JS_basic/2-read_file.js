// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8').trim().split('\n');
  const students = {};

  for (const line of data.slice(1)) {
    const [firstName, , , field] = line.split(',');
    if (field) {
      students[field] = students[field] || [];
      students[field].push(firstName.trim());
    }
  }
  console.log(`Number of students: ${data.length - 1}`);

  for (const field in students) {
    const count = students[field].length;
    const list = students[field].join(', ');
    console.log(`Number of students in ${field}: ${count}. List: ${list}`);
  }
}

module.exports = countStudents;
