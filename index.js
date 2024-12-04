// 1

//Write a JavaScript program that checks if a given number is positive, negative, or zero.
// Sample Input: let number = -5;
// Sample Output: "-5 is negative"
const number = -5;
if (number > 0) {
  console.log("This number is positive");
} else if (number < 0) {
  console.log("This number is negative");
} else {
  console.log("This number is zero");
}
// 2

// Write a JavaScript program to check if a given temperature in Celsius is
//  considered freezing (below 0), normal (0-30), or hot (above 30).
// Sample Input: let temperature = 15;
// Sample Output: "15°C is normal"
const temperature = 15;
if (temperature <= 0) {
  console.log(temperature, "°C is below ");
} else if (temperature > 0 && temperature < 30) {
  console.log(temperature, "°C is normal ");
} else if (temperature >= 30) {
  console.log(temperature, "°C is hot ");
}
// 3

// Write a JavaScript program to determine whether a given character is a vowel or a consonant.
// Sample Input: let char = 'a';
// Sample Output: "a is a vowel"
const s = "a";
if (
  s === "a" ||
  s === "e" ||
  s === "i" ||
  s === "o" ||
  s === "u" ||
  s === "A" ||
  s === "E" ||
  s === "I" ||
  s === "O" ||
  s === "U"
) {
  console.log(`${s} is a vowel`);
} else {
  console.log(`${s} is a consonant`);
}
// 4

// Write a JavaScript program to calculate the grade based on a given score:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60

// Sample Input: let score = 85;
// Sample Output: "Your grade is B"
const Bat = prompt("Shalgah dungee oruulana uu", "");
console.log("Oruulsan dun shalgah=" + Bat);
if (Bat < 60) {
  console.log("F");
} else if (Bat >= 60 && Bat <= 69) {
  console.log("D");
} else if (Bat >= 70 && Bat <= 79) {
  console.log("C");
} else if (Bat >= 80 && Bat <= 89) {
  console.log("B");
} else {
  console.log("A");
}
// 5

// Write a JavaScript program to determine if a person is an adult, teenager, or child based on their age.

// Child: Below 13
// Teenager: 13-19
// Adult: 20 and above

// Sample Input: let age = 16;
// Sample Output: "You are a teenager"
const old = prompt("Ta heden nastai we");
if (0 <= old && old <= 1) {
  console.log("Infant");
} else if (1 < old && old <= 3) {
  console.log("Toddler");
} else if (3 < old && old <= 5) {
  console.log("Preschool");
} else if (5 < old && old <= 12) {
  console.log("Gradeschooler");
} else if (12 < old && old <= 18) {
  console.log("Teen");
} else if (18 < old && old <= 21) {
  console.log("Youngadult");
} else if (21 < old && old <= 50) {
  console.log("Adult");
} else {
  console.log("Elderly");
}
// 6

// Write a JavaScript program to check if a given number is divisible by 5 or 7.
// Sample Input: let number = 35;
// Sample Output: "35 is divisible by both 5 and 7"
let input = prompt("Toogoo oruulana uu", "");
if (input % 7 === 0) {
  console.log("This number is disiible by 7");
} else if (input % 5 === 0) {
  console.log("This number disible by 5");
} else if (input % 7 === 0 && input % 5 === 0) {
  console.log("This is divisible by both 5 and 7");
} else if (input % 3 !== 0 && input % 5 !== 0) {
  console.log("given Input Another Number");
} else {
  console.log("Not a number!");
}
// 7

// Write a JavaScript program to determine whether
//  the given time is in the morning (0-11), afternoon (12-17), or evening (18-23).
// Sample Input: let hour = 14;
// Sample Output: "It's afternoon"
const time = 8;
if (time >= 0 && time <= 11) {
  console.log("It's a morning");
} else if (time >= 12 && time <= 17) {
  console.log("It's a afternoon");
} else if (time >= 18 && time <= 23) {
  console.log("It's a evening");
} else {
  console.log("Inter Time!");
}
// 8

// Write a JavaScript program to check if a number is a single-digit, double-digit, or triple-digit number.
// Sample Input: let number = 25;
// Sample Output: "25 is a double-digit number"
const num = 25;
if (num / 10 < 1) {
  console.log("This is a one-digit number");
} else if (num / 100 < 1) {
  console.log("This is a double-digit number");
} else if (num / 1000 < 1) {
  console.log("This is a triple-digit number");
}
// 9

// Write a JavaScript program to determine whether a number is a multiple of 4.
// Sample Input: let number = 16;
// Sample Output: "16 is a multiple of 4"
const numb = 16;
if (numb % 4 === 0) {
  console.log("This is a multiple of 4");
} else if (numb % 4 !== 0) {
  console.log("This isn't a multiple of 4");
} else {
  console.log("Please enter number!");
}
// 10

// Write a JavaScript program to check if a given character is uppercase or lowercase.
// Sample Input: let char = 'G';
// Sample Output: "G is uppercase"
const char = "g";
if (char.toUpperCase === char) {
  console.log("This is uppercase");
} else {
  console.log("This is lowercase");
}
// 11

// Write a JavaScript program to determine if a given day number corresponds to a weekday or a weekend (1 = Monday, ..., 7 = Sunday).
// Sample Input: let day = 6;
// Sample Output: "It's a weekend"
const day = 1;
if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
  console.log("It's a weekday!");
} else if (day === 6 || day === 7) {
  console.log("It's a weekday!");
}
// 12

// You’re designing a coffee shop menu. Write a program to determine the price of a coffee based on size:

// Small: $2
// Medium: $3
// Large: $4

// Sample Input: let size = 'Medium';
// Sample Output: "A Medium coffee costs $3"
const size = "Medium";
if (size === "Medium") {
  console.log("A Medium coffee costs $3");
} else if (size === "Small") {
  console.log("A Small coffee costs $2");
} else {
  console.log("A large coffee costs $4");
}
// 13

// You’re writing a program for a weather app.
// Display whether a person should take an umbrella, a jacket, or sunglasses based on the weather condition (Rainy, Cold, Sunny).
// Sample Input: let weather = 'Rainy';
// Sample Output: "Don't forget your umbrella!"
const weather = "Rainy";
if (weather === "Sunny") {
  console.log("Don't forget your sunglasses!");
} else if (weather === "Rainy") {
  console.log("Don't forget your umbrella!");
} else if (weather === "Cold") {
  console.log("Don't forget your jacket!");
}
// 14

// You are creating a program for a theater. Based on a person's age, determine their ticket price:

// Below 5: Free
// 5 to 18: $10
// 19 to 60: $15
// Above 60: $12

// Sample Input: let age = 70;
// Sample Output: "Your ticket price is $12"
const age = 8;
if (age >= 5) {
  console.log("Your ticket price is free");
} else if (age >= 5 && age <= 18) {
  console.log("Your ticket price is $10");
} else if (age >= 19 && age <= 60) {
  console.log("Your ticket price is $15");
} else if (age >= 60) {
  console.log("Your ticket price is $12");
} else {
  console.log("Inter age!");
}
// 15

// You’re designing a program for a virtual pet. Determine if the pet is Happy, Hungry, or Sleepy based on its energy level:

// Energy > 70: Happy
// Energy between 30 and 70: Hungry
// Energy < 30: Sleepy

// Sample Input: let energy = 25;
// Sample Output: "Your pet is Sleepy"
const energy = 25;
if (energy >= 70) {
  console.log("Your pet is Happy");
} else if (energy > 30 && energy < 70) {
  console.log("Your pet is Hungry ");
} else if (energy >= 30) {
  console.log("Your pet is Sleepy");
}
// 16

// You’re developing a weightlifting app. Based on the weight lifted, classify the attempt as Beginner, Intermediate, or Advanced:

// Weight < 50 kg: Beginner
// 50-100 kg: Intermediate
// Weight > 100 kg: Advanced

// Sample Input: let weight = 75;
// Sample Output: "You are lifting at an Intermediate level"
const weight = 25;
if (weight > 50) {
  console.log("You are lifting at an Beginner level");
} else if (weight >= 50 && weight < 100) {
  console.log("You are lifting at an Intermediate level");
} else if (weight >= 100) {
  console.log("You are lifting at an Advanced level");
}
// 17

// Create a discount program for a clothing store. The discount depends on the total amount spent:

// Spend < $50: No discount
// Spend $50-$100: 10% discount
// Spend $101-$200: 20% discount
// Spend > $200: 30% discount

// Sample Input: let totalSpent = 150;
// Sample Output: "You get a 20% discount"
const spend = 190;
if (spend < 50) {
  console.log("No discount");
} else if (spend >= 50 && spend <= 100) {
  console.log("You get a 10% discount");
} else if (spend >= 101 && spend <= 200) {
  console.log("You get a 20% discount");
} else if (spend >= 200) {
  console.log("You get a 30% discount");
} else {
  console.log("Inter spend!");
}
// 18

// Write a program to determine if a password is strong, medium, or weak.

// Strong: At least 8 characters, includes numbers and special characters
// Medium: At least 6 characters, includes either numbers or special characters
// Weak: Less than 6 characters

// Sample Input: let password = 'Pass123!';
// Sample Output: "Your password is strong"
const numbers = /\d/;
const special = /^\S+.*\S+$/;
const password = "Passs1234!";
console.log(numbers.test(password));
console.log(special.test(password));
if (password.length < 6) {
  console.log("Your password is a Weak");
} else if (
  password.length >= 8 &&
  numbers.test(password) === true &&
  special.test(password) === true
) {
  console.log("Your password is a Strong");
} else if (
  (password.length >= 8 && numbers.test(password) === true) ||
  special.test(password) === true
) {
  console.log("Your password is a Medium");
}
// 19

// You’re coding a program for an amusement park. Ticket prices vary by age and height:

// Children under 120 cm: $5
// Adults 120 cm or taller and aged under 60: $10
// Seniors aged 60 and above: $7

// Sample Input: let age = 65, height = 130;
// Sample Output: "Your ticket price is $7"
const height = 130;
const a=60;
if(height<=120 && a<=18){
    console.log("Your ticket price is $5");
    
}
else if(height<=120 && a>=19 && a<=60){
    console.log("Your ticket price is $10");
}
else if(a>60){
    console.log("Your ticket price is $7");
}
// 20

// Write a program for a mobile data plan. Determine the cost based on data usage:

// 0-5 GB: $10
// 5-20 GB: $20
// 20-50 GB: $30
// More than 50 GB: $50

// Sample Input: let dataUsage = 25;
// Sample Output: "Your data cost is $30"
const gb= 25;
if (gb< 5) {
  console.log("Your data cost 10$");
} else if (gb>= 5 && gb<= 20) {
  console.log("Your data cost 20$");
} else if (gb>= 21 && gb<= 50) {
  console.log("Your data cost 30$");
} else if (gb>= 251) {
  console.log("Your data cost 50$");
} else {
  console.log("Inter Data!");
}
// 21

// Write a program for a bank loan eligibility check. A user qualifies if:

// They are at least 21 years old
// Their annual income is greater than $25,000
// They do not have a poor credit score (creditScore > 600)

// Sample Input: let age = 30, income = 30000, creditScore = 650;
// Sample Output: "You are eligible for the loan"

// 22

// Write a program for an online grading system where the final grade depends on a combination of attendance and exam scores:

// If attendance is below 75%, the grade is automatically "F".
// Otherwise, calculate the average score of three exams:
// Average >= 90: A
// Average >= 80: B
// Average >= 70: C
// Average >= 60: D
// Below 60: F

// Sample Input: let attendance = 80; let exam1 = 85
// Sample Output: "Your final grade is B"
const b = 98;
console.log("Oruulsan dun shalgah=" + Bat);
if (Bat < 60) {
  console.log("Your grade is a F");
} else if (Bat >= 60 && Bat <= 69) {
  console.log("Your grade is a D");
} else if (Bat >= 70 && Bat <= 79) {
  console.log("Your grade is a C");
} else if (Bat >= 80 && Bat <= 89) {
  console.log("Your grade is a B");
} else {
  console.log("Your grade is a A");
}
// 23

// Write a program to calculate the total salary for a company employee, including bonuses:

// Base salary is $2000.
// Add $500 if the employee has worked for more than 5 years.
// Add $300 if they achieved the monthly target.
// Add $100 if their attendance is above 90%.

// Sample Input:
// let yearsWorked = 6;
// const metTarget = true
// const attendance = 95;
// Sample Output: "Your total salary is $2900"

// 24

// Create a program to determine a runner’s performance in a marathon based on time and gender:

// For men:
// Elite: Under 2:10:00
// Advanced: Under 3:00:00
// Amateur: Over 3:00:00
// For women:
// Elite: Under 2:30:00
// Advanced: Under 3:15:00
// Amateur: Over 3:15:00

// Sample Input:
// let gender = 'Female';
// const time = '2:45:00';
// Sample Output: "Your performance level is Advanced"
