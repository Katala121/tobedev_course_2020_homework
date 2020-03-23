'use strict'
const Contact = require('./Contact');
const ConsoleReader = require('./ConsoleReader');
const isPhoneBookNotEmpty = require('./IsPhoneBookNotEmpty');
const massagePrinter = require('./MassagePrinter');
const isValid = require('./IsValidData'); 


const PhoneBook = {
    contacts: [],

    async addContact(){
        massagePrinter.printTooltip('Введите имя');
        const contactName = String(await ConsoleReader.getLine());
        if(!isValid.isValidName(contactName)){
            massagePrinter.printError('Введен неправильный формат имени!\nИмя должно быть на русском языке и с заглавной буквы.');
        }
        massagePrinter.printTooltip('Введите номер телефона');
        const contactPhone = String(await ConsoleReader.getLine());
    
        if(isValid.isValidTel(contactPhone)){
            const contact = new Contact(contactName, contactPhone);
            this.contacts.push(contact);
            massagePrinter.printMassage(`Создан контакт: ${contactName}   ${contactPhone}`);
        }else{
            massagePrinter.printError('Введен неправильный формат номера телефона!');
        }
    },

    async printPhoneBook(){
        if( isPhoneBookNotEmpty() ){ 
            massagePrinter.printMassage('\t__ТЕЛЕФОННАЯ КНИГА__\n');
            for(let i = 0; this.contacts.length; i++){
                const contact = this.contacts[i];
                massagePrinter.printMassage(`\t${contact.name}\t|\t${contact.phone}`);
            }
        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
    },

    async searchContact(){
        if( isPhoneBookNotEmpty()){ 
            massagePrinter.printTooltip('Введите имя для поиска');
            const searchName = String(await ConsoleReader.getLine());
            
            for(let i = 0; i < this.contacts.length; i++){
                const contact = this.contacts[i];
                
                if(contact.name === searchName){
                    massagePrinter.printMassage(`\t${contact.name}\t|\t${contact.phone}`);
                }else{
                    massagePrinter.printError(`Нет контакта с именем ${searchName} в телефонной книге`);
                }
            }

        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
        
    },

    async deleteContact(){
        if( isPhoneBookNotEmpty()){   
            massagePrinter.printTooltip('Введите имя контакта');
            const deleteName = String(await ConsoleReader.getLine());
            for(let i = 0; i < this.contacts.length; i++){
                const contact = this.contacts[i];

                if(contact.name === deleteName){
                    this.contacts.splice(i, 1);
                    massagePrinter.printMassage(`контакт ${contact.name} удален`);
                }else{
                    massagePrinter.printError(`Нет контакта с именем ${deleteName} в телефонной книге`);
                }
            }
        }else{
            massagePrinter.printError('\tТелефонная книга пуста!');
        }
    }

};

module.exports = PhoneBook;