import { WeekDays } from "../enums/week-day.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradeView } from "../views/trade-view.js";

export class TradeController
{
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private trades = new Trades();
    private tradeView = new TradeView('#tradeView');
    private messageView = new MessageView('#messageView');

    constructor()
    {
        this.inputDate = document.querySelector('#date') as HTMLInputElement;
        this.inputAmount = document.querySelector('#amount') as HTMLInputElement;
        this.inputValue = document.querySelector('#value') as HTMLInputElement
        this.tradeView.update(this.trades);
    }

    public add(): void
    {
        const trade = this.createTrade();
        if(!this.businessDay(trade.date))
        {
            this.messageView.update('Only can possible do a trade during business days!');
            return;
        }

        this.trades.add(trade);        
        this.tradeView.update(this.trades);
        this.messageView.update('Trade Successfully Add!')
        this.cleanForm();
    }

    private businessDay(date: Date)
    {   
        return date.getDay() > WeekDays.SUNDAY 
            && date.getDay() < WeekDays.SATURDAY
    }

    private createTrade(): Trade
    {
        const date = new Date(this.inputDate.value.replace('-', ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseInt(this.inputValue.value);

        return new Trade(date, amount, value);
    }

    private cleanForm(): void
    {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}