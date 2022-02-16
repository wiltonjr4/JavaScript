export class Trades {
    trades = [];
    add(trade) {
        this.trades.push(trade);
    }
    list() {
        return this.trades;
    }
}
