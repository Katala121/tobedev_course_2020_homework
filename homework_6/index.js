'use strict'
const ConsoleReader = require('./ConsoleReader'); 
const NoteBook = require('./NoteBook');
const massagePrinter = require('./MassagePrinter');
const phoneBookStorage = require('./PhoneBookStorage');
const consoleReader = new ConsoleReader();
const noteBook = new NoteBook(phoneBookStorage);

const main = async () => {
    console.log('В вашем распоржении телефонная книга');
    console.log('Используйте команды приведенные ниже:');
    console.log('add - \t\tДля добавления контакта');
    console.log('search - \tДля поиска контакта по имени');
    console.log('del - \t\tДля удаления контакта');
    console.log('view - \t\tДля просмотра всей телефонной книги');
    console.log('size - \t\tДля вывода количества контактов');
    console.log('exit - \t\tДля выхода');
    const command = await consoleReader.getLine(); 
       if (command === 'exit') {
    process.exit(0);
    }else if(command === 'add'){
        await noteBook.addContact();
    }else if(command === 'view'){
        await noteBook.printPhoneBook();
    }else if(command === 'search'){
        await noteBook.searchContact();
    }else if(command === 'del'){
        await noteBook.deleteContact();
    }else if(command === 'size'){
        await NoteBook.getSizeNoteBook(phoneBookStorage);
    }else {
        massagePrinter.printError('Неизвестная команда');
    }
    main();
};

main();
