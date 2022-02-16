import { TradeController } from "./controllers/trade-controller.js";
import { TradeView } from "./views/trade-view.js";

const controller = new TradeController();
const form = document.querySelector('.form');
if(form)
{
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else
{
    throw Error('Impossible start the aplication. Verify if the form is null.')
}
