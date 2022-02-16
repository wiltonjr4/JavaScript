export abstract class View<T>
{
    protected element: HTMLElement;

    constructor(selector: string)
    {
        const element = document.querySelector(selector);
        if(element)
        {
            this.element = element as HTMLElement;
        }
        else
        {
            throw Error(`Selector ${selector} don't exist in DOM. Verify!`)
        }
    }

    public update(model: T): void
    {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}