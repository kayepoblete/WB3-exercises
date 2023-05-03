// Exercise page 64
"use strict";

window.onload = init;

function init() {
    document.getElementById("btnConvert").onclick = dateToString;
}

function dateToString() {
    const inputDate = document.getElementById("inputDate").value;
    const stringDate = inputDate.toString();
    const newDate = new Date(stringDate);

    document.getElementById("displayMessage").innerHTML = stringDate;
    document.getElementById("displayDate").innerHTML = newDate.toString();
}