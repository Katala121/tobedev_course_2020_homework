'use strict'
const phoneBook = require('./PhoneBook');

function isPhoneBookNotEmpty(){
    return Object.keys(phoneBook).length !== 0;
}

module.exports = isPhoneBookNotEmpty;