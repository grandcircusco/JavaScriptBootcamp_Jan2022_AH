"use strict";
/*
Within the main function:
1. Add the "big" class to the "grow-me" paragraph.
2. Remove the "big" class from the "shrink-me" paragraph.
3. Find all the <li>s and log their text content to the console.
4. Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
5. Set the "display" CSS property of the "hide-me" paragraph to "none".
6. Set the "display" CSS property of the "show-me" paragraph to "block".
7. Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
*/

const main = () => {
    // 1.
    document.querySelector("#grow-me").classList.add("big");

    // 2.
    document.querySelector("#shrink-me").classList.remove("big");

    // 3.
    document.querySelectorAll("li").forEach(li => console.log(li.innerText));

    // 4. 
    let link = document.querySelector("a");
    link.setAttribute("href", "https://www.example.com");

    // or,
    // link.href = "https://www.example.com";

    link.innerText = "somewhere";


    // 5. 
    document.querySelector("#hide-me").style.display = "none";

    // 6.
    document.querySelector("#show-me").style.display = "block";

    // 7.
    let userName = document.querySelector("input").value;

    document.querySelector("h1").innerText = `Welcome ${userName}`;
}