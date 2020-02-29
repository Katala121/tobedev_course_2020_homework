'use strict'

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

const main = async () => {
    console.log('Введите команду:');
    console.log('rectangle \t - для расчета площади прямоугольника');
    console.log('circle \t\t - для расчета площади круга');
    console.log('exit \t\t - для выхода');
    const command = await getLine();
    if (command === 'exit') {
        process.exit(0);
    }else if(command === 'rectangle'){
        await calculateRectangleArea();
    }else if(command === 'circle'){
        await calculateCircleArea();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();
 
async function calculateRectangleArea(){
    console.log('Введите высоту');
    const height = Number(await getLine());
    console.log('Введите ширину');
    const width = Number(await getLine());

    const area = height * width;
    console.log(`Площадь прямоугольника с высотой: ${height} и шириной: ${width} равна: ${area}`);
}

async function calculateCircleArea(){
    console.log('Радиус круга');
    const radius = Number(await getLine());

    const areaCircle = (radius * radius) * Math.PI;
    console.log(`Площадь круга с радиусом: ${radius} равна: ${areaCircle}`);
}