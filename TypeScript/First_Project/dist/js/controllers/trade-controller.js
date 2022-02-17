var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { loginExecutionTime } from "../decorators/login-execution-time.js";
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
    importData() {
        fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((data) => {
            return data.map(todayData => {
                return new Trade(new Date(), todayData.vezes, todayData.montante);
            });
        })
            .then(todayTrades => {
            for (let trade of todayTrades) {
                this.trades.add(trade);
            }
            this.tradeView.update(this.trades);
        });
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
__decorate([
    inspect(),
    loginExecutionTime(true)
], TradeController.prototype, "add", null);
