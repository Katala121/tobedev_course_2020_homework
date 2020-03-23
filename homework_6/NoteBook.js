'use strict'

const ConsoleReader = require('./ConsoleReader'); 
const Contact = require('./Contact');
const massagePrinter = require('./MassagePrinter');
const isPhoneBookNotEmpty = require('./IsPhoneBookNotEmpty');
const isValid = require('./IsValidData');
const phoneBookStorage = require('./PhoneBookStorage');

const consoleReader = new ConsoleReader();

class NoteBook{

    constructor(phoneBookStorage){
        this.phoneBookStorage = phoneBookStorage;
    }
    
    async addContact(){
        massagePrinter.printTooltip('Введите имя');
        const contactName = String(await consoleReader.getLine());
        if(!isValid.isValidName(contactName)){
            massagePrinter.printError('Введен неправильный формат имени!\nИмя должно быть на русском языке и с заглавной буквы.');
        }
        massagePrinter.printTooltip('Введите номер телефона');
        const contactPhone = String(await consoleReader.getLine());
    
        if(isValid.isValidTel(contactPhone)){
            const contact = new Contact(contactName, contactPhone);
            phoneBookStorage.push(contact);
            massagePrinter.printMassage(`Создан контакт: ${contactName}   ${contactPhone}`);
        }else{
            massagePrinter.printError('Введен неправильный формат номера телефона!');
        }
    }

    async printPhoneBook(){
        if( isPhoneBookNotEmpty() ){ 
            massagePrinter.printMassage('\t__ТЕЛЕФОННАЯ КНИГА__\n');
            for(let i = 0; i < phoneBookStorage.length; i++){
                const contact = phoneBookStorage[i];
                massagePrinter.printMassage(`\t${contact.name}\t|\t${contact.phone}`);
            }
        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
    }

    async searchContact(){
        if( isPhoneBookNotEmpty()){ 
            massagePrinter.printTooltip('Введите имя для поиска');
            const searchName = String(await consoleReader.getLine());
            
            for(let i = 0; i < phoneBookStorage.length; i++){
                const contact = phoneBookStorage[i];
                
                if(contact.name === searchName){
                    massagePrinter.printMassage(`\t${contact.name}\t|\t${contact.phone}`);
                }else{
                    massagePrinter.printError(`Нет контакта с именем ${searchName} в телефонной книге`);
                }
            }

        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
        
    }

    async deleteContact(){
        if( isPhoneBookNotEmpty()){   
            massagePrinter.printTooltip('Введите имя контакта');
            const deleteName = String(await consoleReader.getLine());
            let findName = false;
            for(let i = 0; i < phoneBookStorage.length; i++){
                const contact = phoneBookStorage[i];
                if(contact.name === deleteName){
                    findName = true;
                    phoneBookStorage.splice(i, 1);
                }
            }
            if(findName){
                massagePrinter.printMassage(`контакт ${deleteName} удален`);
            }else{
                massagePrinter.printError(`Нет контакта с именем ${deleteName} в телефонной книге`);
            }
        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
    }

    static getSizeNoteBook(phoneBookStorage) {
        massagePrinter.printMassage(`Количество контактов в телефонной книге: ${phoneBookStorage.length}`);
    }

}


module.exports = NoteBook;