'use strict'
const phoneBook = require('./PhoneBook');
const consoleReader = require('./ConsoleReader');
const isPhoneBookNotEmpty = require('./IsPhoneBookNotEmpty'); 

async function addContact(){
    console.log('Введите имя');
    const contactName = String(await consoleReader.getLine());
    console.log('Введите номер телефона');
    const contactPhone = Number(await consoleReader.getLine());

    phoneBook[contactName] = contactPhone;
    console.log(`Создан контакт: ${contactName}   ${contactPhone}`);
}

async function printPhoneBook(){
    if( isPhoneBookNotEmpty() ){ 
        console.log('\t__ТЕЛЕФОННАЯ КНИГА__\n');
        for(let key in phoneBook){
            console.log(`\t${key}\t|\t${phoneBook[key]}`);
        }
    }else{
        console.log('\tТелефонная книга пуста!');
    }
}

async function searchContact(){
    if( isPhoneBookNotEmpty()){ 
        console.log('Введите имя для поиска');
        const searchName = String(await consoleReader.getLine());
        
        if(searchName in phoneBook){
            console.log(`\t${searchName}\t|\t${phoneBook[searchName]}`);
        }else{
            console.log(`Нет контакта с именем ${searchName} в телефонной книге`);
        }
    }else{
        console.log('\tТелефонная книга пуста!');
    }
    
}                                  

async function deleteContact(){
    if( isPhoneBookNotEmpty()){   
        console.log('Введите имя контакта');
        const deleteName = String(await consoleReader.getLine());
        if(deleteName in phoneBook){
            delete phoneBook[deleteName];
            console.log(`контакт ${deleteName} удален`);
        }else{
            console.log(`Нет контакта с именем ${deleteName} в телефонной книге`);
        }
    }else{
        console.log('\tТелефонная книга пуста!');
    }
}

module.exports.addContact = addContact;
module.exports.printPhoneBook = printPhoneBook;
module.exports.searchContact = searchContact;
module.exports.deleteContact = deleteContact;