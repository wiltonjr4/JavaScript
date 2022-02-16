import { TradeController } from "./controllers/trade-controller.js";
const controller = new TradeController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
