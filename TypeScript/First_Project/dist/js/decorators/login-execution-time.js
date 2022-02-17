export function loginExecutionTime(seconds = false) {
    return function (target, propertykey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = 'milliseconds';
            if (seconds) {
                divider = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const callback = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, execution time: ${(t2 - t1) / divider} ${unit}`);
            callback;
        };
        return descriptor;
    };
}
