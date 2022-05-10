class Advertisement{

    constructor () {
        this._Advertisement=null;
        this._createDate=null;
        this._author=null;
        this._text=null;
        this._phoneNumber=null;
        this._email=null;
        this._isPrivate=null;
        this._summ=null;
        this._VAT=null;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get author() {
        return this._author;
    }

    set phoneNumber(pN_string) {
        if (pN_string[0] === '+') {
            this._phoneNumber=pN_string;
        } else {
            this._phoneNumber='Invalid Number!';
        }
    }

    set author(au_string) {
        this._author=au_string;
    }
}

module.exports = Advertisement;