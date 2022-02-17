export function domInjection(selector: string)
{
    return function( target: any, propertkey: string )
    {
        console.log(`Modifying Prototype ${target.constructor.name} and adding getter to the property ${propertkey}`);
        
        const getter = function()
        {
            const element = document.querySelector(selector);
            console.log(`Searching DOM element with the selector ${selector} to inject in ${propertkey}`);
            return element;
        }

        Object.defineProperty(
            target,
            propertkey,
            { get: getter }
        );
    }
}