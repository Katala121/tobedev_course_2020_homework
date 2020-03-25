'use strict'
const phoneBookStorage = require('./PhoneBookStorage');

function isPhoneBookNotEmpty(){
    return phoneBookStorage.length !== 0;

}

module.exports = isPhoneBookNotEmpty;