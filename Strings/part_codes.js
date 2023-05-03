//Exercise 3 page 52
"use strict";

let code1 = "ACME:123-L";
let code2 = "DI:12345-M";
let code3 = "ACE:1-12";

function getSupplier(code) {
// that returns all characters before the :
    let colonPos = code.indexOf(":");
    let supplier = code.substring(0, colonPos);
    
    return supplier;
}

function getProductNumber(code) {
// that returns all characters between the : and -
    let colonPos = code.indexOf(":");
    let dashPos = code.indexOf("-");
    let productNumber = code.substring(colonPos+1, dashPos);
    
    return productNumber;
}

function getSize(code) {
// that returns all characters after the -
    let dashPos = code.indexOf("-");
    let size = code.substring(dashPos+1);

    return size;
}

console.log(getSupplier(code1));
console.log(getProductNumber(code1));
console.log(getSize(code1));

console.log(getSupplier(code2));
console.log(getProductNumber(code2));
console.log(getSize(code2));

console.log(getSupplier(code3));
console.log(getProductNumber(code3));
console.log(getSize(code3));