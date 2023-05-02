//Exercise 1 page 21

function convertFtoC(fahrenheitTemp) {
    return (fahrenheitTemp - 32)*(5/9);
}

let currentTemp = 92;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp);

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));