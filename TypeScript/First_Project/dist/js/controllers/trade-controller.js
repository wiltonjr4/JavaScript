import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
export class TradeController {
    inputDate;
    inputAmount;
    inputValue;
    trades = new Trades();
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    createTrade() {
        const date = new Date(this.inputDate.value.replace('-', ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseInt(this.inputValue.value);
        return new Trade(date, amount, value);
    }
    add() {
        const trade = this.createTrade();
        this.trades.add(trade);
        console.log(this.trades.list());
        this.cleanForm();
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
