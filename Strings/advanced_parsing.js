//Exercise 2 page 51
"use strict";

function parseAndDisplayName(personName) {
    let spacePos1 = personName.indexOf(" ");
    let spacePos2 = personName.lastIndexOf(" ");
    let firstName = personName.substring(0, spacePos1);
    let middleName = personName.slice(spacePos1+1, spacePos2);
    let lastName = personName.substring(spacePos2+1);
    
    if(spacePos1 < 0){
        console.log(`Name: ${personName}`);
        console.log(`Only name: ${personName}`);
    }
    else if(middleName != ""){
        console.log(`Name: ${personName}`);
        console.log(`First name: ${firstName}`);
        console.log(`Middle name: ${middleName}`);
        console.log(`Last name: ${lastName}`);
    }
    else{
        console.log(`Name: ${personName}`);
        console.log(`First name: ${firstName}`);
        console.log(`Last name: ${lastName}`);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");