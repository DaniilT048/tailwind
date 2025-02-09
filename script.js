"use strict"

let element1 = document.getElementById("TestAnimation1")
let element2 = document.getElementById("TestAnimation2")
let element3 = document.getElementById("TestAnimation3")
// setInterval(() => {
//     if (element) {
//         element.classList.toggle("bg-red-800");
//     }else {
//         element.classList.toggle("bg-red-950");
//     }
// }, 1000);


setInterval(() => {
    element1.classList.toggle("hidden");
}, 2000)
setInterval(() => {
    element2.classList.toggle("hidden");
}, 4000)
setInterval(() => {
    element3.classList.toggle("hidden");
}, 8000)