import { createStore, dispatch } from 'redux';

const reducer = (state, {type}) => {
    switch (type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const store = createStore(reducer, {
    count: 0
});

export {store};
