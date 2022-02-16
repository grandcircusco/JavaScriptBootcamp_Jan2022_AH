/*

Heating/Cooling exercise:
Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating & cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby.

*/

let actualTemp = 13;
let desiredTemp = 69;

if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else {
    console.log("Standby")
}