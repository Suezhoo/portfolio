"use strict";

import { resize } from "./main.js";

window.onload = function () {
    initInteractionButtons();
};

function initInteractionButtons() {
    // Search button
    const searchButton = document.querySelector(".search");
    searchButton.addEventListener("click", () => {
        console.log("Search Project");
        extendElement(searchButton);
    });

    // Add project button
    const addButton = document.querySelector(".plus");
    addButton.addEventListener("click", () => {
        console.log("Add project");
        const addText = document.querySelector("#plus-text");
        extendElement(addText);
    });
    // Auto grow add project text
    const addText = document.querySelector("#name");
    const addSpan = document.querySelector("#emptyName");
    console.log(addText);
    addText.addEventListener("input", () => {
        resize(addSpan, addText);
    });
    // Get value from add project text
}

function extendElement(element) {
    if (element.classList.contains("plus-text")) {
        element.classList.replace("plus-text", "hide");
    } else if (element.classList.contains("hide")) {
        element.classList.replace("hide", "plus-text");
    }
}
