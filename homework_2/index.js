'use strict'
const consoleReader = require('./ConsoleReader'); 
const contact = require('./Contact');
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
        await contact.addContact();
    }else if(command === 'view'){
        await contact.printPhoneBook();
    }else if(command === 'search'){
        await contact.searchContact();
    }else if(command === 'del'){
        await contact.deleteContact();
    } else {
        massagePrinter.printError('Неизвестная команда');
    }

    main();
};

main();
