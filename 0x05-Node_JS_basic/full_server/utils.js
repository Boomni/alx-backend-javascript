const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the promise with the error
      } else {
        const lines = data.trim().split('\n');
        const studentData = {};

        for (const line of lines.slice(1)) {
          const [firstName, , , field] = line.split(',');
          if (field) {
            studentData[field] = studentData[field] || [];
            studentData[field].push(firstName.trim());
          }
        }

        resolve(studentData); // Resolve the promise with the student data
      }
    });
  });
}

module.exports = { readDatabase };
