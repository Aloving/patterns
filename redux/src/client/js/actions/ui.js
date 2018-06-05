export const SET_LOADER = 'SET_LOADER';
export const SET_NOTFOUND = 'SET_NOTFOUND';
export const SET_ERROR = 'SET_ERROR';

export const setLoader = () => {
    return {
        type: SET_LOADER
    };
}

export const setNotFound = () => {
    return {
        type: SET_NOTFOUND
    };
}

export const setError = () => {
    return {
        type: SET_ERROR
    };
}
