class Advertisement{

    Advertisement;
    createDate;
    author;
    text;
    phoneNumber;
    email;
    isPrivate;
    summ;
    VAT;

    constructor () {
        this.Advertisement=null;
        this.createDate=null;
        this.author=null;
        this.text=null;
        this.phoneNumber=null;
        this.email=null;
        this.isPrivate=null;
        this.summ=null;
        this.VAT=null;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    get author() {
        return this.author;
    }

    set phoneNumber(pN_string) {
        if (pN_string[0] === '+') {
            return this.phoneNumber=pN_string;
        } else {
            return console.log('Invalid Number!');
        }
    }

    set author(au_string) {
        this.author=au_string;
    }
}

module.exports = Advertisement;