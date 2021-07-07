import {HYDRATE} from 'next-redux-wrapper';

const INITIAL_STATE = {
    currentToken: null,
}

const tokensReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'SET_TOKEN':
            return {
                ...state,
                currentToken: action.payload
            }
        default:
            return state;
    }
};

export default tokensReducer;
