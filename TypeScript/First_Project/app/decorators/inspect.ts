export function inspect()
{
    return function(
        target: any,
        propertykey: string,
        descriptor: PropertyDescriptor
    )
    {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[])
        {
            console.log(`--- Method ${propertykey}`);
            console.log(`------ Parameters: ${JSON.stringify(args)}`);
            const callback = originalMethod.apply(this, args);
            console.log(`------ Return: ${JSON.stringify(callback)}`);
            return callback;
        }

        return descriptor;
    }
}