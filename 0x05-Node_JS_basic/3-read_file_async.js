// Reading a file asynchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(Boolean);

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
        }

        const students = {};

        for (const line of lines.slice(1)) {
          const [firstName, , , field] = line.split(',');
          if (field) {
            students[field] = students[field] || [];
            students[field].push(firstName.trim());
          }
        }

        console.log(`Number of students: ${lines.length - 1}`);

        for (const field in students) {
if ({}.hasOwnProperty.call(students, field)) {
      const count = students[field].length;
      const list = students[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }}

        resolve();
      }
    });
  });
}

module.exports = countStudents;
