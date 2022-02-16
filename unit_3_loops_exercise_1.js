/*
Counting Loops:
Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.
Repeat the exercise with a while loop.
Repeat with a do while.
Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for … of to loop through this array and log all the numbers. (Note: we’re not asking you to also count down on this one.)
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10)

let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 1)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    console.log(number);
}