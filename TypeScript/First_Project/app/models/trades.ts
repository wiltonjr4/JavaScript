import { Trade } from "./trade.js";

export class Trades
{
    private trades: Trade[] = [];

    public add(trade: Trade)
    {
        this.trades.push(trade);
    }

    public list(): readonly Trade[]
    {
        return this.trades;
    }
}