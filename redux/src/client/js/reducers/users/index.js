import {combineReducers} from 'redux';

import {users as usersReducer} from './users';
import {filter} from './filter';

export const users = combineReducers({
    all: usersReducer,
    filtered: filter
});
