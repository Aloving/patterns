import {store} from './store';

const counter = document.querySelector('h1');
const incrementCounter = document.querySelector('.increment');
const decrementCounter = document.querySelector('.decrement');

initListeners()

render(store.getState());

function render({count}) {
    counter.innerText = count;
}

function initListeners() {
    store.subscribe(() => {
        render(store.getState());
    });

    incrementCounter.addEventListener('click', () => {
        store.dispatch({type: 'INCREMENT'});
    });

    decrementCounter.addEventListener('click', () => {
        store.dispatch({type: 'DECREMENT'});
    });
}
