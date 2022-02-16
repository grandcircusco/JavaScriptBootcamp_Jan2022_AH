/*
Task: Identify the longest of three names.

Build Specifications:
Start with three variables name1, name2, and name3 which hold three names.

The code should output the longest of the three names. e.g., "Ada Lovelace has the longest name.". If there is a tie between any two, list both. e.g., “Charles and Brendan tie for the longest name.”. Or if all three names are the same length, output “All three names, Dorothy, Charles, and Brendan, are the same length.”

Make sure to test your code with many different combinations of lengths. There are 7 possible outcomes.

*/

let name1 = "Alvin";
let name2 = "Simon";
let name3 = "Theodore";

if (name1.length === name2.length && name1.length === name3.length) {
    console.log(`All three names – ${name1}, ${name2}, and ${name3} – are the same length.`);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (name1.length === name3.length && name1.length > name2.length) {
    console.log(`${name1} and ${name3} tie for the longest name.`);
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log(`${name2} and ${name3} tie for the longest name.`);
} else if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} is the longest name.`);
} else {
    console.log(`${name3} is the longest name.`);
}