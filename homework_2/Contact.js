'use strict'
const phoneBook = require('./PhoneBook');
const ConsoleReader = require('./ConsoleReader');
const isPhoneBookNotEmpty = require('./IsPhoneBookNotEmpty');
const massagePrinter = require('./MassagePrinter');
const isValid = require('./IsValidData');

async function addContact(){
    massagePrinter.printTooltip('Введите имя');
    const contactName = String(await ConsoleReader.getLine());
    if(!isValid.isValidName(contactName)){
        massagePrinter.printError('Введен неправильный формат имени!\nИмя должно быть на русском языке и с заглавной буквы.');
    }
    massagePrinter.printTooltip('Введите номер телефона');
    const contactPhone = String(await ConsoleReader.getLine());

    if(isValid.isValidTel(contactPhone)){
        phoneBook[contactName] = contactPhone;
        massagePrinter.printMassage(`Создан контакт: ${contactName}   ${contactPhone}`);
    }else{
        massagePrinter.printError('Введен неправильный формат номера телефона!');
    }
}

async function printPhoneBook(){
    if( isPhoneBookNotEmpty() ){ 
        massagePrinter.printMassage('\t__ТЕЛЕФОННАЯ КНИГА__\n');
        for(let key in phoneBook){
            massagePrinter.printMassage(`\t${key}\t|\t${phoneBook[key]}`);
        }
    }else{
        massagePrinter.printError('\tТелефонная книга пуста!');
    }
}

async function searchContact(){
    if( isPhoneBookNotEmpty()){ 
        massagePrinter.printTooltip('Введите имя для поиска');
        const searchName = String(await ConsoleReader.getLine());
        
        if(searchName in phoneBook){
            massagePrinter.printMassage(`\t${searchName}\t|\t${phoneBook[searchName]}`);
        }else{
            massagePrinter.printError(`Нет контакта с именем ${searchName} в телефонной книге`);
        }
    }else{
        massagePrinter.printError('\tТелефонная книга пуста!');
    }
    
}                                  

async function deleteContact(){
    if( isPhoneBookNotEmpty()){   
        massagePrinter.printTooltip('Введите имя контакта');
        const deleteName = String(await ConsoleReader.getLine());
        if(deleteName in phoneBook){
            delete phoneBook[deleteName];
            massagePrinter.printMassage(`контакт ${deleteName} удален`);
        }else{
            massagePrinter.printError(`Нет контакта с именем ${deleteName} в телефонной книге`);
        }
    }else{
        massagePrinter.printError('\tТелефонная книга пуста!');
    }
}

module.exports.addContact = addContact;
module.exports.printPhoneBook = printPhoneBook;
module.exports.searchContact = searchContact;
module.exports.deleteContact = deleteContact;