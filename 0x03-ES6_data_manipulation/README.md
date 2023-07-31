# 0x03. ES6 Data Manipulation

## Project Overview
In this project, I learnt various data manipulation techniques in ES6 (ECMAScript 2015). I worked with arrays, typed arrays, sets, and maps and implemented different functions using these data structures.

## Learning Objectives
The objective of the project is to:

- Use map, filter, and reduce on arrays
- Understand and utilize typed arrays
- Grasp the concepts of the Set, Map, and WeakMap data structures
- Implement functions to work with arrays, sets, and maps

## Tasks
### Task 0: Basic List of Objects
Create a function named getListStudents that returns an array of objects representing students. Each student object should have three attributes: id (Number), firstName (String), and location (String).

### Task 1: More Mapping
Create a function named getListStudentIds that takes an array of student objects (similar to the output of getListStudents) and returns an array of their ids.

### Task 2: Filter
Create a function named getStudentsByLocation that takes a list of student objects (similar to the output of getListStudents) and a city (String) as parameters. It should return an array of objects representing students who are located in the specified city.

### Task 3: Reduce
Create a function named getStudentIdsSum that takes a list of student objects (similar to the output of getListStudents) as a parameter and returns the sum of all the student ids.

### Task 4: Combine
Create a function named updateStudentGradeByCity that takes a list of student objects (similar to the output of getListStudents), a city (String), and an array of grade objects as parameters. Each grade object has the format: { studentId: 31, grade: 78 }. For each student with a grade object provided, update their grade in the student object. If a student does not have a grade in the grade objects array, the final grade should be set to 'N/A'.

### Task 5: Typed Arrays
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

### Task 6: Set Data Structure
Create a function named setFromArray that returns a new Set containing all the unique elements from the given array.

### Task 7: More Set Data Structure
Create a function named hasValuesFromArray that returns a boolean value indicating if all the elements in the array exist within the set.

### Task 8: Clean Set
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

### Task 9: Map Data Structure
Create a function named groceriesList that returns a map of groceries with the items (name, quantity) specified in the task.

### Task 10: More Map Data Structure
Create a function named updateUniqueItems that returns an updated map for all items with an initial quantity of 1.

## Usage

You can run each file using the npm run dev <filename> command to see the results.

```
npm run dev 0-main.js
npm run dev 1-main.js
npm run dev 2-main.js
# ...and so on
```

## Author

> Jonathan Boomni