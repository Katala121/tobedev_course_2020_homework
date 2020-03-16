'use strict';

const validTel = /^((\+7|7|8)+([0-9]){10})$/;
const validName = /[a-zA-Z]{6,}$/;


function isValidTel(data) {
    const telNum = '' + data;

    if (telNum.match(validTel)) {
        return true;
    } else return false;
}

function isValidName(name) {
    if (name.match(validName)) {
        return true;
    } else return false;
}

module.exports.isValidTel = isValidTel;
module.exports.isValidName = isValidName;
