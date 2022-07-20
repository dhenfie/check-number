## check-number.js
simple library to check even or odd number.

## usage example

browser 
```javascript
console.log(CheckNumber(100).isEven); // true
console.log(CheckNumber(100).isOdd); // false
console.log(CheckNumber(5).isOdd); // true
```
Nodejs 
```javascript
 const num = require('check-number');
 console.log(num.CheckNumber(100).isEven); // true
 console.log(num.CheckNumber(100).isOdd); // false
 console.log(num.CheckNumber(5).isOdd); // true
```