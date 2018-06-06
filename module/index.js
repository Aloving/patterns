function CounterModule(initialvalue = 0) {
    let counter = initialvalue;

    return {
        increment() {
            counter += 1;
            return counter;
        },

        decrement() {
            counter -= 1;
            return counter;
        }
    }
}

const counter = CounterModule(10);

console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
