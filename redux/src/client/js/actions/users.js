import * as uiActions from './ui';

export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const FILTER_USERS = 'FILTER_USERS';
export const FILTERED_USERS = 'FILTERED_USERS';

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const filterUsers = (users, value) => {
    return {
        type: FILTER_USERS,
        payload: users,
        searchValue: value
    }
}

export const filteredUsers = (filtered) => {
    return {
        type: FILTERED_USERS,
        payload: filtered
    }
}

export const fetchUsers = () => (dispatch) => {
    dispatch(uiActions.setLoader());

    fetch('/api/users')
        .then(res => res.json())
        .then((users) => dispatch(setUsers(users)))
        .catch(() => {
            dispatch(uiActions.setError());
        });
}
