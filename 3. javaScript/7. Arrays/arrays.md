# JavaScript Arrays – Compvare Notes

## 1. Introduction to Arrays

Array JavaScript ka ek data structure hai jo multiple values ko ek hi variable ke andar store karta hai.

Example:

 
var fruits = ["Apple", "Banana", "Mango"];
 

Is array mein 3 values hain. Har value ko element kehte hain.

Array ka index hamesha 0 se start hota hai.

---

## 2. Index in Arrays

### Index kya hota hai?

Index har element ka position number hota hai.

Example:

 
var fruits = ["Apple", "Banana", "Mango"];
 

| Value  | Index |
| ------ | ----- |
| Apple  | 0     |
| Banana | 1     |
| Mango  | 2     |

Access karna:

 
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
 

### Index ka use kahan hota hai?

1. Specific element access karne ke liye
2. Value update karne ke liye
3. Loop chalane ke liye

Example:

 
fruits[1] = "Orange";
console.log(fruits);
 

---

## 3. Length in Arrays

### Length kya hota hai?

Length property array mein total elements ki counting batati hai.

Example:

 
var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // 3
 

### Important Concept

Last index hamesha hota hai:

 
length - 1
 

Example:

 
var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[fruits.length - 1]); // Mango
 

---

## 4. Index vs Length

| Index                         | Length                    |
| ----------------------------- | ------------------------- |
| Position batata hai           | Total elements batata hai |
| 0 se start hota hai           | 1 se count hota hai       |
| Specific value access ke liye | Loop control ke liye      |
| fruits[0]                     | fruits.length             |

Example:

 
var arr = [10, 20, 30, 40];

arr.length       // 4
Last index       // 3
Last value       // arr[arr.length - 1]
 

---

## 5. Loop with Index and Length

Correct loop:

 
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 

Common mistake:

 
for (var i = 0; i <= arr.length; i++)
 

Ye galat hai kyunki last iteration mein undefined milega.

---

# 6. Important Array Methods

## 6.1 push()

Array ke end mein value add karta hai.

 
var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1,2,3,4]
 

---

## 6.2 pop()

Last element remove karta hai.

 
numbers.pop();
console.log(numbers);
 

---

## 6.3 shift()

First element remove karta hai.

 
numbers.shift();
 

---

## 6.4 unshift()

Start mein value add karta hai.

 
numbers.unshift(0);
 

---

## 6.5 map()

Har element par function apply karta hai aur new array return karta hai.

 
var nums = [1, 2, 3];

var doubled = nums.map(function(num) {
    return num * 2;
});

console.log(doubled); // [2,4,6]
 

Use case:

* Data transform karna
* React aur modern JavaScript mein zyada use hota hai

---

## 6.6 filter()

Condition ke base par elements select karta hai.

 
var ages = [12, 18, 20, 15];

var adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults); // [18,20]
 

Use case:

* Data filtering
* Search functionality

---

## 6.7 forEach()

Loop ki tarah kaam karta hai lekin new array return nahi karta.

 
nums.forEach(function(num) {
    console.log(num);
});
 

Difference:

* map new array return karta hai
* forEach sirf execute karta hai

---

## 6.8 find()

Pehla matching element return karta hai.

 
var result = ages.find(age => age >= 18);
console.log(result); // 18
 

---

## 6.9 includes()

Check karta hai ke value array mein exist karti hai ya nahi.

 
fruits.includes("Apple"); // true
 

---

## 6.10 slice()

Array ka copy portion return karta hai. Original array change nahi hota.

 
var newArr = nums.slice(1, 3);
 

---

## 6.11 splice()

Array ke beech se add ya remove karta hai. Original array change hota hai.

 
nums.splice(1, 1);
 

Note:
Kuch cases mein splice ka kaam filter se bhi kiya ja sakta hai.

---

## 6.12 reduce()

Pure array ko single value mein convert karta hai.

 
var nums = [1, 2, 3, 4];

var total = nums.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total); // 10
 

Use case:

* Sum
* Average
* Complex calculations

---

# 7. Most Important Methods (Exam and Practical)

1. push
2. pop
3. map
4. filter
5. forEach
6. find
7. reduce

---

# 8. Suggested Teaching Flow (1 Hour Class)

1. Array introduction
2. Index explanation
3. Length explanation
4. Loop with index and length
5. Basic methods (push, pop, shift, unshift)
6. Advanced methods (map, filter, find)
7. reduce at the end

---

# 9. Practice Questions

1. Ek array banao jisme 5 numbers hon.
2. Last number print karo using length.
3. Ek number add karo using push.
4. Sirf even numbers filter karo.
5. Sab numbers ko double karo using map.
6. Array ka total sum nikalo using reduce.

---

# Final Concept Summary

* Array multiple values store karta hai
* Index position batata hai aur 0 se start hota hai
* Length total elements batata hai
* Last index = length - 1
* Loop mein hamesha i < arr.length use karo
* map, filter aur reduce modern JavaScript ke core methods hain

Agar chaho to main isko Markdown file format mein headings aur structure ke saath GitHub ready version bhi bana doon.
