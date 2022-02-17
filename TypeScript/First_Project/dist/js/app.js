import { TradeController } from "./controllers/trade-controller.js";
const controller = new TradeController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error('Impossible start the aplication. Verify if the form is null.');
}
const buttonImport = document.querySelector('#button-import');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error("Button import don't finded");
}
