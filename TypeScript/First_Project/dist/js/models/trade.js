export class Trade {
    _date;
    amount;
    value;
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get bulk() { return this.amount * this.value; }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
}
