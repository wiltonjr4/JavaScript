import { View } from "./view.js";
export class TradeView extends View {
    template(model) {
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
        `;
    }
}
