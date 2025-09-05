const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim());

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstnameIndex = headers.indexOf('firstname');

    const studentsByField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const field = values[fieldIndex];
        const firstname = values[firstnameIndex];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstname);
      }
    }

    const totalStudents = Object.values(studentsByField).reduce(
      (acc, curr) => acc + curr.length, 0,
    );
    let output = `Number of students: ${totalStudents}`;

    for (const [field, students] of Object.entries(studentsByField)) {
      output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  let output = 'This is the list of our students';

  try {
    const studentsInfo = await countStudents(database);
    output += `\n${studentsInfo}`;
  } catch (error) {
    output += `\n${error.message}`;
  }

  res.send(output);
});

app.listen(port);

module.exports = app;
