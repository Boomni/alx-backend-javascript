// Small HTTP server using Node's HTTP module
// Routing practice
const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.get('/', function (req, res) {
  res.send('root')
})
app.get('/students', function (req, res) {
  res.end('This is the list of our students')
})
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
    })
    .catch((error) => {
      console.log(error);
    });
module.exports = app
