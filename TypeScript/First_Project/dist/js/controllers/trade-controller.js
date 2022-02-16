import { WeekDays } from "../enums/week-day.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradeView } from "../views/trade-view.js";
export class TradeController {
    inputDate;
    inputAmount;
    inputValue;
    trades = new Trades();
    tradeView = new TradeView('#tradeView');
    messageView = new MessageView('#messageView');
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.tradeView.update(this.trades);
    }
    add() {
        const trade = this.createTrade();
        if (!this.businessDay(trade.date)) {
            this.messageView.update('Only can possible do a trade during business days!');
            return;
        }
        this.trades.add(trade);
        this.tradeView.update(this.trades);
        this.messageView.update('Trade Successfully Add!');
        this.cleanForm();
    }
    businessDay(date) {
        return date.getDay() > WeekDays.SUNDAY
            && date.getDay() < WeekDays.SATURDAY;
    }
    createTrade() {
        const date = new Date(this.inputDate.value.replace('-', ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseInt(this.inputValue.value);
        return new Trade(date, amount, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
