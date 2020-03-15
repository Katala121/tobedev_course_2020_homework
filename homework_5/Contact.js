function Contact(name,phone){
    this.name = name;
    this.phone = phone;
}

Object.getOwnPropertyDescriptor(Contact, 'name', {
    writable: false
});

module.exports = Contact;