"use strict";

window.onload = function () {
    url.addEventListener("input", resize);
};
const empty = document.querySelector("#empty");
const url = document.querySelector("#url");

function resize() {
    empty.textContent = url.value;
    url.style.width = empty.offsetWidth + "px";
    console.log(empty.textContent, url.style.width);
}
