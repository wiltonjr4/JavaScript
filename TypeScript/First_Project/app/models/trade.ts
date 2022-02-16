export class Trade
{
    constructor(  
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
    ) {}

    get bulk(): number { return this.amount * this.value}

    get date(): Date
    {
        const date = new Date(this._date.getTime());
        return date;
    }
}