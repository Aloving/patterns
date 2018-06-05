import {combineReducers} from 'redux';

import {users} from './users';
import {ui} from './ui';

export const reducer = combineReducers({
    users,
    ui
});
