"use strict";

window.onload = function () {
    // Name
    const emptyName = document.querySelector("#emptyName");
    const name = document.querySelector("#name");
    name.addEventListener("input", () => {
        resize(emptyName, name);
    });
    // Description
    const emptyDesc = document.querySelector("#emptyDesc");
    const desc = document.querySelector("#description");
    desc.addEventListener("input", () => {
        resize(emptyDesc, desc);
        autoGrow(desc);
    });
    // URL
    const emptyURL = document.querySelector("#emptyURL");
    const URL = document.querySelector("#url");
    URL.addEventListener("input", () => {
        resize(emptyURL, URL);
    });
};

function resize(span, input) {
    span.textContent = input.value;
    input.style.width = span.offsetWidth + "px";
}

function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
}
