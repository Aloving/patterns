import * as usersActions from '../../actions/users';

const initialState = [];

export const users = (users = initialState, {type, payload}) => {
    switch (type){
        case usersActions.SET_USERS: 
            return payload;

        default:
            return users;
    }
};
