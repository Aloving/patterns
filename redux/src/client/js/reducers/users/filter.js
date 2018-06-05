import {SET_USERS, FILTER_USERS} from '../../actions/users';

const initialState = [];

export const filter = (users = initialState, {type, payload, searchValue}) => {
    switch(type) {
        case SET_USERS:
            return payload;
        case FILTER_USERS:
            return payload.filter(({name}) => {
                return !!~name.toLowerCase().indexOf(searchValue.toLowerCase());
              });
        default:
            return users;
    }
};
