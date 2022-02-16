export class View {
    element;
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} don't exist in DOM. Verify!`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
