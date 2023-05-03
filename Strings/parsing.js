//Exercise 1 page 51
"use strict";

// let name = "Brenda Kaye";

function parseAndDisplayName(personName) {
    let spacePos = personName.indexOf(" ");
    let firstName = personName.substring(0, spacePos);
    let lastName = personName.substring(spacePos+1);
    
    console.log(`Name: ${personName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
