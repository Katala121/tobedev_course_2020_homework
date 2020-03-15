'use strict'
const consoleReader = require('./ConsoleReader'); 
const phoneBook = require('./PhoneBook');
const massagePrinter = require('./MassagePrinter');


const main = async () => {
    console.log('В вашем распоржении телефонная книга');
    console.log('Используйте команды приведенные ниже:');
    console.log('add - \t\tДля добавления контакта');
    console.log('search - \tДля поиска контакта по имени');
    console.log('del - \t\tДля удаления контакта');
    console.log('view - \t\tДля просмотра всей телефонной книги');
    console.log('exit - \t\tДля выхода');
    const command = await consoleReader.getLine(); 
       if (command === 'exit') {
    process.exit(0);
    }else if(command === 'add'){
        await phoneBook.addContact();
    }else if(command === 'view'){
        await phoneBook.printPhoneBook();
    }else if(command === 'search'){
        await phoneBook.searchContact();
    }else if(command === 'del'){
        await phoneBook.deleteContact();
    } else {
        massagePrinter.printError('Неизвестная команда');
    }
    main();
};

main();