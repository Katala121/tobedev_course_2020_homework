const readline = require('readline');

class ConsoleReader{
    
    rl = readline.createInterface({input: process.stdin, output: process.stdout});

    getLine = () => function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            console.log(this);
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);

    };
   
}

const consoleReader = new ConsoleReader();

async function read(){
    const comand = await consoleReader.getLine();
    console.log(comand);

}

read();