#!/usr/bin/env node
const fs = require('fs');
const contacts = require('./contacts.json');
const command = process.argv[2];

function printContacts(contacts){
    for(let contact of contacts){
        console.log(contact.name+ "\t"+contact.number);
    }

}
if ('create' === command) {
    contacts.push({ name: process.argv[3], number: process.argv[4] });
    let data = JSON.stringify(contacts);
    fs.writeFileSync('contacts.json', data);
    console.log("contact saved");
}
else if ('list' === command) {
    printContacts(contacts);
}
else {
    const search = contacts.filter(contact => contact.name.includes(process.argv[3]))
    printContacts(search);
}


