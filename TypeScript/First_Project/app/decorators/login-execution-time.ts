export function loginExecutionTime(seconds: boolean = false)
{
    return function(
        target: any,
        propertykey: String,
        descriptor: PropertyDescriptor
    )
    {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[])
        {
            let divider = 1;
            let unit = 'milliseconds';
            
            if(seconds)
            {
                divider = 1000;
                unit = 'seconds';
            }

            const t1 = performance.now();
            const callback = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, execution time: ${(t2 - t1)/divider} ${unit}`);
            callback
        }

        return descriptor;
    }
}