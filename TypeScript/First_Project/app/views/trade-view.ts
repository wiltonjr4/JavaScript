import { Trades } from "../models/trades.js";
import { View } from "./view.js";

export class TradeView extends View<Trades>
{

    protected template(model: Trades): string
    {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(trade => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                            <td>${trade.amount}</td>
                            <td>${trade.value}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `
    }
}