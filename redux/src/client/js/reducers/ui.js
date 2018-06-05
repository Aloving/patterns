import * as uiActions from '../actions/ui';
import * as usersActions from '../actions/users';

const initialState = {};

export const ui = (state = initialState, {type, payload}) => {
    switch (type){
        case uiActions.SET_LOADER:
            return {
                loader: true,
                notFound: false,
                error: false,
                search: false
            };
        
        case uiActions.SET_ERROR:
            return {
                loader: false,
                notFound: false,
                error: true,
                search: false
            };
        
        case uiActions.SET_NOTFOUND: 
            return {
                loader: false,
                notFound: true,
                error: false,
                search: true
            };
        
        case usersActions.SET_USERS: 
            return {
                loader: false,
                error: false,
                notFound: !payload.length,
                search: !!payload.length
            };
        
        case usersActions.FILTERED_USERS: 
            return {
                loader: false,
                error: false,
                notFound: !payload.length,
                search: true
            };

        default: 
            return state;
    }
}