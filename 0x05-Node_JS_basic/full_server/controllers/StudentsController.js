const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((studentData) => {
        const fields = Object.keys(studentData).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        res.status(200).send('This is the list of our students:\n');

        fields.forEach((field) => {
          const studentsInField = studentData[field];
          const count = studentsInField.length;
          const list = studentsInField.join(', ');

          res.write(`Number of students in ${field}: ${count}. List: ${list}\n`);
        });

        res.end(); // End the response
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('path/to/your/database.csv')
      .then((studentData) => {
        const studentsInMajor = studentData[major] || [];

        res.status(200).send(`List: ${studentsInMajor.join(', ')}\n`);
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

module.exports = StudentsController;
