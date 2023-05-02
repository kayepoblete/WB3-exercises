//Exercise 1 page 16

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);
}

function addNumbers(num1, num2) {
    const result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}

function displayReceipt(totalDue, amountPaid) {
    const changeDue = amountPaid - totalDue;
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    console.log(`Change Due: $${changeDue.toFixed(2)}`);
}

displayMailingLabel("Kaye Poblete", "123 Street", "Vallejo", "CA", "94591");
displayMailingLabel("Maria Bo", "456 Lane", "San Francisco", "CA", "94121");

addNumbers(42, 13);
addNumbers(22, 26);

//overpay
displayReceipt(88.99, 100);
//exact pay
displayReceipt(73.84, 73.84);
//underpay
displayReceipt(10.50, 10);
