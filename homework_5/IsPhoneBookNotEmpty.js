'use strict'
const phoneBook = require('./PhoneBook');

function isPhoneBookNotEmpty(){
    return phoneBook.contacts.length !== 0;
}

module.exports.isPhoneBookNotEmpty = isPhoneBookNotEmpty;