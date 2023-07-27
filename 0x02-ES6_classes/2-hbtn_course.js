class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      const trimmedName = newName.trim();
      if (trimmedName === '') {
        throw 'Name must be a string';
      }
      this._name = trimmedName;
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      const parsedLength = parseInt(newLength);
      if (isNaN(parsedLength)) {
        throw 'Length must be a number';
      }
      this._length = parsedLength;
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
        throw 'Students must be an array of strings';
      }
      this._students = newStudents;
    }
  }
  
  export default HolbertonCourse;
  