//Exercise 3 page 21

function getSocSecTax(grossPay) {
    let taxRate = 0.062
    let socSecTax = grossPay * taxRate;
    return socSecTax;
}

function getMedicareTax(grossPay) {
    let taxRate = 0.0145
    let medicareTax = grossPay * taxRate;
    return medicareTax;
}

function getFederalTax(grossPay, withholdCode) {
    let taxRate;
    if (withholdCode == 0) {
        taxRate = 0.23;
    }
    else if(withholdCode == 1) {
        taxRate = 0.21;
    }
    else if(withholdCode == 2) {
        taxRate = 0.195;
    }
    else if(withholdCode == 3) {
        taxRate = 0.185;
    }
    else if(withholdCode == 4) {
        taxRate = 0.18;
    }
    else if(withholdCode > 4) {
        let highCode = (withholdCode - 4) * 0.005;
        taxRate = 0.18 - highCode;
    }
    let fedTax = grossPay * taxRate;
    return fedTax;
}


// console.log(getFederalTax(750, 0));
// console.log(getFederalTax(1550, 2));
console.log(getFederalTax(1100, 6));