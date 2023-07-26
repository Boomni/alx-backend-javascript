# 0x01. ES6 Promises

## Description

This project covers the concepts of ES6 (ECMAScript 2015) related to Promises, async/await, and error handling. The goal is to implement various functions using Promises, handle asynchronous operations, and understand how to catch and handle errors.

## Learning Objectives

The project aims to help understand and explain the following concepts without the help of Google:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, and `catch` methods
- How to use every method of the Promise object
- Error handling using `throw` and `try`
- The `await` operator and how to use an async function

## Tasks

- **0-promise.js**: Implement a function `getResponseFromAPI()` that returns a Promise using a prototype.

- **1-promise.js**: Implement a function `getFullResponseFromAPI(success)` that returns a Promise based on the boolean `success` argument.

- **2-then.js**: Implement a function `handleResponseFromAPI(promise)` that appends three handlers to the given Promise.

- **3-all.js**: Implement a function `handleProfileSignup()` that resolves multiple promises and logs the results.

- **4-user-promise.js**: Implement a function `signUpUser(firstName, lastName)` that returns a resolved Promise with an object.

- **5-photo-reject.js**: Write a function `uploadPhoto(filename)` that returns a rejected Promise with an error message.

- **6-final-user.js**: Implement a function `handleProfileSignup(firstName, lastName, fileName)` that handles multiple promises using await.

- **7-load_balancer.js**: Implement a function `loadBalancer(chinaDownload, USDownload)` that returns the value of the fastest resolved Promise.

- **8-try.js**: Write a function `divideFunction(numerator, denominator)` that handles division and throws an error if the denominator is 0.

- **9-try.js**: Write a function `guardrail(mathFunction)` that creates and returns an array with the result or error message of the given function.

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