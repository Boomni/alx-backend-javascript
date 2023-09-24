const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const db = process.argv[2];

const countStudents = (path, callback) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      callback(new Error('Cannot load the database'), null);
    } else {
      const lines = data.trim().split('\n').filter(Boolean);

      if (lines.length === 0) {
        callback(new Error('Cannot load the database'), null);
      }

      const students = {};

      for (const line of lines.slice(1)) {
        const [firstName, , , field] = line.split(',');
        if (field) {
          students[field] = students[field] || [];
          students[field].push(firstName.trim());
        }
      }

      let response = `Number of students: ${lines.length - 1}`;

      for (const field in students) {
        if ({}.hasOwnProperty.call(students, field)) {
          const count = students[field].length;
          const list = students[field].join(', ');
          response += `\nNumber of students in ${field}: ${count}. List: ${list}`;
        }
      }

      callback(null, response);
    }
  });
};

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(db, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${error.message}`);
      } else {
        res.end(`This is the list of our students:\n${data}`);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
