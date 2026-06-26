# JavaScript Array Methods - Notes for Students

## Introduction
Array methods are built-in functions in JavaScript that help us work with arrays easily. They are used to loop through data, filter values, transform arrays, calculate totals, and perform many common tasks without writing complex loops.

---

# 1. map()

### What is map()?
`map()` creates a new array by modifying each element of the original array.

### Why do we use it?
- To transform data.
- To create a new array without changing the original array.

### Syntax
```js
array.map(function(item){
    return modifiedItem;
});
```

### Example 1: Multiply Numbers
```js
let numbers = [1,2,3,4];

let result = numbers.map(num => num * 2);

console.log(result);
// [2,4,6,8]
```

### Example 2: Convert Names to Uppercase
```js
let names = ["ali","ahmed","hassan"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);
```

### Example 3: Add "Mr."
```js
let students = ["Ali","Ahmed","Hamza"];

let result = students.map(name => "Mr. " + name);

console.log(result);
```

---

# 2. filter()

### What is filter()?
`filter()` returns a new array containing only the elements that satisfy a condition.

### Why do we use it?
- To remove unwanted data.
- To search specific values.

### Example 1: Even Numbers
```js
let numbers = [1,2,3,4,5,6];

let even = numbers.filter(num => num % 2 === 0);

console.log(even);
// [2,4,6]
```

### Example 2: Age Greater Than 18
```js
let ages = [15,20,25,17];

let adults = ages.filter(age => age >= 18);

console.log(adults);
```

### Example 3: Long Names
```js
let names = ["Ali","Abdullah","Hamza"];

let result = names.filter(name => name.length > 4);

console.log(result);
```

---

# 3. forEach()

### What is forEach()?
`forEach()` executes a function for every element of an array.

### Why do we use it?
- To print values.
- To perform actions on each element.

### Example 1
```js
let fruits = ["Apple","Banana","Orange"];

fruits.forEach(item => {
    console.log(item);
});
```

### Example 2
```js
let numbers = [1,2,3];

numbers.forEach(num => {
    console.log(num * 2);
});
```

### Example 3
```js
let students = ["Ali","Ahmed"];

students.forEach(student => {
    console.log("Welcome " + student);
});
```

---

# 4. find()

### What is find()?
`find()` returns the first element that matches a condition.

### Why do we use it?
- To find a specific value.
- To search objects or arrays.

### Example 1
```js
let numbers = [10,20,30,40];

let value = numbers.find(num => num > 25);

console.log(value);
// 30
```

### Example 2
```js
let ages = [12,15,20,25];

let adult = ages.find(age => age >= 18);

console.log(adult);
```

### Example 3
```js
let names = ["Ali","Ahmed","Hamza"];

let result = names.find(name => name === "Ahmed");

console.log(result);
```

---

# 5. reduce()

### What is reduce()?
`reduce()` converts an array into a single value.

### Why do we use it?
- Sum values.
- Calculate totals.
- Count occurrences.

### Example 1: Sum
```js
let numbers = [10,20,30];

let total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);
// 60
```

### Example 2: Multiply
```js
let numbers = [2,3,4];

let result = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(result);
// 24
```

### Example 3: Maximum Number
```js
let numbers = [5,10,2,20];

let max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});

console.log(max);
```

---

# 6. some()

### What is some()?
`some()` checks whether at least one element satisfies a condition.

### Why do we use it?
- To check if any value exists.

### Example 1
```js
let numbers = [1,3,5,8];

let even = numbers.some(num => num % 2 === 0);

console.log(even);
// true
```

### Example 2
```js
let ages = [10,12,15,20];

let adult = ages.some(age => age >= 18);

console.log(adult);
```

### Example 3
```js
let marks = [40,50,90];

let passed = marks.some(mark => mark >= 80);

console.log(passed);
```

---

# 7. every()

### What is every()?
`every()` checks whether all elements satisfy a condition.

### Why do we use it?
- To validate all values.

### Example 1
```js
let numbers = [2,4,6,8];

let even = numbers.every(num => num % 2 === 0);

console.log(even);
// true
```

### Example 2
```js
let ages = [20,22,30];

let adults = ages.every(age => age >= 18);

console.log(adults);
```

### Example 3
```js
let marks = [80,90,95];

let passed = marks.every(mark => mark >= 50);

console.log(passed);
```

---

# 8. flat()

### What is flat()?
`flat()` converts nested arrays into a single array.

### Why do we use it?
- To remove nested levels.
- To combine arrays into one.

### Example 1
```js
let arr = [1,2,[3,4]];

console.log(arr.flat());

// [1,2,3,4]
```

### Example 2
```js
let arr = [1,[2,[3,4]]];

console.log(arr.flat(2));

// [1,2,3,4]
```

### Example 3
```js
let data = [["HTML","CSS"],["JavaScript","React"]];

console.log(data.flat());

// ["HTML","CSS","JavaScript","React"]
```

---

# Difference Between Methods

| Method | Purpose | Returns |
|----------|---------|---------|
| map() | Transform each element | New Array |
| filter() | Select elements based on condition | New Array |
| forEach() | Perform action on each element | Undefined |
| find() | Find first matching element | Single Value |
| reduce() | Convert array to one value | Single Value |
| some() | Check if at least one element matches | Boolean |
| every() | Check if all elements match | Boolean |
| flat() | Flatten nested arrays | New Array |

---

# Real-Life Examples

### map()
Convert product prices to discounted prices.

### filter()
Get only active users from database.

### find()
Search a student by ID.

### reduce()
Calculate total bill amount.

### some()
Check whether any student failed.

### every()
Check whether all students passed.

### flat()
Merge categories and subcategories into one array.

---

# Summary

Array methods make code:
- ✅ Short
- ✅ Clean
- ✅ Easy to Read
- ✅ More Powerful
- ✅ Better than traditional loops in many situations
