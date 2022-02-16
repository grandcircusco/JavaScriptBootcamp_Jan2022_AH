/*
Extended Challenges second exercise:
Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”). Write a switch statement that checks the targetUnit and logs the temperature converted to that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp.
*/

let tempCelsius = 2;
let targetUnit = "F"; // C, F, or K

switch(targetUnit) {
    case "F" : console.log(`${tempCelsius} degrees Celsius = ${tempCelsius * 9 / 5 + 32} degrees Fahrenheit.`);
    break;

    case "K" : console.log(`${tempCelsius} degrees Celsius = ${tempCelsius + 273.15} Kelvin.`);
    break;

    default: console.log(`${tempCelsius} degrees Celsius = ${tempCelsius} degrees Celsius.`);
}