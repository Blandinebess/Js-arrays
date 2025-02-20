// array-exercises.js

// Exercise 1: Create an array of three colors and print the first color.
let colors = ["bleu", "purple", "green"];

console.log(colors[0]);

// Exercise 2: Add a color to the end of the array and print the array.
colors.push("pink");
console.log(colors);

// Exercise 3: Remove the last color from the array and print the array.
colors.pop("green");
console.log(colors);

// Exercise 4: Add a color to the beginning of the array and print the array.
colors.unshift("purple");
console.log(colors);

// Exercise 5: Remove the first color from the array and print the array.
colors.unshift("red");
console.log(colors);

// Exercise 6: Print the number of colors in the array.
console.log(colors.length);

// Exercise 7: Convert the array into a string separated by dashes.
console.log(colors.join("-"));

// Exercise 8: Replace the second color with "pink" and print the array.
colors[1] = "pink";
console.log(colors);

// Exercise 9: Create an array of numbers and print the third number.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[4]);

// Exercise 10: Remove the last element, add two numbers to the beginning, and print the array.

numbers.pop();
numbers.unshift(0, -1);
console.log(numbers);                                                                             

