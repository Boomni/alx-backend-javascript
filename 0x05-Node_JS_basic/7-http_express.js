const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

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

app.get('/students', (req, res) => {
  countStudents(process.argv[2], (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.send(`This is the list of our students\n${error.message}`);
    } else {
      res.send(`This is the list of our students\n${data}`);
    }
  });
});

app.get('*', (req, res) => {
  res.status(404).send(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Error</title>
</head>
<body>
  <pre>Cannot GET ${req.url}</pre>
</body>
</html>`,
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
