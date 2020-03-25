class Contact {
    constructor(name, phone){
        this._name = name;
        this._phone = phone;
    }

    get name(){
        return this._name;
    }

    get phone(){
        return this._phone;
    }
}

module.exports = Contact;