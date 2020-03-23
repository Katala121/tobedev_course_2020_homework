'use strict'
const chalk = require('chalk');

function printTooltip(massage){
    console.log(chalk.blue.bold(massage));
}

function printError(massage){
    console.log(chalk.red(massage));
}

function printMassage(massage){
    console.log(chalk.hex('#00ffea')(massage));
}

module.exports.printTooltip = printTooltip;
module.exports.printError = printError;
module.exports.printMassage = printMassage;