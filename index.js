'use strict'

const phoneBook = {};

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

function isPhoneBookNotEmpty(){
    return Object.keys(phoneBook).length !== 0;
}
 
async function addContact(){
    console.log('Введите имя');
    const contactName = String(await getLine());
    console.log('Введите номер телефона');
    const contactPhone = Number(await getLine());

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
        const searchName = String(await getLine());
        
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
        const deleteName = String(await getLine());
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

const main = async () => {
    console.log('В вашем распоржении телефонная книга');
    console.log('Используйте команды приведенные ниже:');
    console.log('add - \t\tДля добавления контакта');
    console.log('search - \tДля поиска контакта по имени');
    console.log('del - \t\tДля удаления контакта');
    console.log('view - \t\tДля просмотра всей телефонной книги');
    console.log('exit - \t\tДля выхода');
    const command = await getLine(); 
       if (command === 'exit') {
    process.exit(0);
    }else if(command === 'add'){
        await addContact();
    }else if(command === 'view'){
        await printPhoneBook();
    }else if(command === 'search'){
        await searchContact();
    }else if(command === 'del'){
        await deleteContact();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();