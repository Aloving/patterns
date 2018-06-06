function simpleLogger(fn) {
    const loggerFunction = console.log;

    return function (...args) {
        loggerFunction(args);
        return fn.apply(this, args);
    }
}

const addThemAll = (...args) => args.reduce((res, cur) => res + cur, 0);

const myFn = simpleLogger(addThemAll);

console.log(myFn(10, 20 ,30));
