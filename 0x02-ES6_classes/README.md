# 0x02. ES6 Classes

## Description

This project covers the concepts of ES6 (ECMAScript 2015) related to classes and object-oriented programming (OOP) in JavaScript. The goal is to implement various classes, understand how to define classes, add methods, use static methods, extend classes, and apply metaprogramming using symbols.

## Learning Objectives

By the end of this project, participants are expected to be able to:

- Define a Class and add methods to a class.
- Understand and implement static methods in a class.
- Extend a class from another and use inheritance.
- Use metaprogramming and symbols in ES6.
- Apply getter and setter methods for class attributes.

## Tasks

1. **ClassRoom**
   - File: [0-classroom.js](./0-classroom.js)
   - Description: Implement a class named ClassRoom that accepts the maxStudentsSize and assigns it to _maxStudentsSize.
   - Example usage:
     ```javascript
     import ClassRoom from "./0-classroom.js";
     
     const room = new ClassRoom(10);
     console.log(room._maxStudentsSize); // Output: 10
     ```

2. **Let's make some classrooms**
   - File: [1-make_classrooms.js](./1-make_classrooms.js)
   - Description: Implement a function named initializeRooms that returns an array of 3 ClassRoom objects with sizes 19, 20, and 34.
   - Example usage:
     ```javascript
     import initializeRooms from './1-make_classrooms.js';
     
     console.log(initializeRooms());
     // Output:
     // [
     //   ClassRoom { _maxStudentsSize: 19 },
     //   ClassRoom { _maxStudentsSize: 20 },
     //   ClassRoom { _maxStudentsSize: 34 }
     // ]
     ```

3. **A Course, Getters, and Setters**
   - File: [2-hbtn_course.js](./2-hbtn_course.js)
   - Description: Implement a class named HolbertonCourse with attributes name, length, and students. Add getters and setters for each attribute.
   - Example usage:
     ```javascript
     import HolbertonCourse from "./2-hbtn_course.js";
     
     const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
     console.log(c1.name); // Output: ES6
     c1.name = "Python 101";
     console.log(c1);
     // Output:
     // HolbertonCourse {
     //   _name: 'Python 101',
     //   _length: 1,
     //   _students: [ 'Bob', 'Jane' ]
     // }
     ```

4. **Methods, static methods, computed methods names..... MONEY**
   - File: [3-currency.js](./3-currency.js)
   - Description: Implement a class named Currency with attributes code and name. Add getters and setters for each attribute. Implement a method named displayFullCurrency that returns the attributes in the format name (code).
   - Example usage:
     ```javascript
     import Currency from "./3-currency.js";
     
     const dollar = new Currency('$', 'Dollars');
     console.log(dollar.displayFullCurrency()); // Output: Dollars ($)
     ```

5. **Pricing**
   - File: [4-pricing.js](./4-pricing.js)
   - Description: Implement a class named Pricing with attributes amount and currency. Add getters and setters for each attribute. Implement a method named displayFullPrice that returns the attributes in the format amount currency_name (currency_code). Add a static method named convertPrice that accepts amount and conversionRate and returns the amount multiplied by the conversion rate.
   - Example usage:
     ```javascript
     import Pricing from './4-pricing.js';
     import Currency from './3-currency.js';
     
     const p = new Pricing(100, new Currency("EUR", "Euro"));
     console.log(p.displayFullPrice()); // Output: 100 Euro (EUR)
     ```

6. **A Building**
   - File: [5-building.js](./5-building.js)
   - Description: Implement a class named Building with attribute sqft. Add a getter for the attribute. Consider this class as an abstract class, and any class extending from it should implement a method named evacuationWarningMessage.
   - Example usage:
     ```javascript
     import Building from './5-building.js';
     
     const b = new Building(100);
     console.log(b.sqft); // Output: 100
     
     // Class TestBuilding should implement the evacuationWarningMessage method.
     class TestBuilding extends Building {}
     try {
       new TestBuilding(200); // Error: Class extending Building must override evacuationWarningMessage
     } catch (err) {
       console.log(err);
     }
     ```

7. **Inheritance**
   - File: [6-sky_high.js](./6-sky_high.js)
   - Description: Implement a class named SkyHighBuilding that extends from Building. The constructor should accept sqft (inherited from Building) and floors. Add a getter for each attribute. Override the method named evacuationWarningMessage and return the string "Evacuate slowly the NUMBER_OF_FLOORS floors."
   - Example usage:
     ```javascript
     import SkyHighBuilding from './6-sky_high.js';
     
     const building = new SkyHighBuilding(140, 60);
     console.log(building.sqft); // Output: 140
     console.log(building.floors); // Output: 60
     console.log(building.evacuationWarningMessage()); // Output: Evacuate slowly the 60 floors
     ```

8. **Airport**
   - File: [7-airport.js](./7-airport.js)
   - Description: Implement a class named Airport with attributes name and code. Add getters for each attribute. The default string description of the class should return the airport code.
   - Example usage:
     ```javascript
     import Airport from "./7-airport.js";
     
     const airportSF = new Airport('San Francisco Airport', 'SFO');
     console.log(airportSF.toString()); // Output: [object SFO]
     ```

9. **Primitive - Holberton Class**
   - File: [8-hbtn_class.js](./8-hbtn_class.js)
   - Description: Implement a class named HolbertonClass with attributes size and location. Add getters for each attribute. When the class is cast into a Number, it should return the size. When the class is cast into a String, it should return the location.
   - Example usage:
     ```javascript
     import HolbertonClass from "./8-hbtn_class.js";
     
     const hc = new HolbertonClass(12, "Mezzanine");
     console.log(Number(hc)); // Output: 12
     console.log(String(hc)); // Output: Mezzanine
     ```

10. **Vroom**
    - File: [10-car.js](./10-car.js)
    - Description: Implement a class named Car with attributes brand, motor, and color. Add a method named cloneCar that returns a new object of the class.
    - Example usage:
      ```javascript
      import Car from "./10-car.js";
      
      // ... (Usage code goes here)
      ```

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