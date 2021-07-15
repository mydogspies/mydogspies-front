import {HYDRATE} from "next-redux-wrapper";

const INITIAL_STATE = {
    currentIconColor: '#222222'
}

const stylesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            };
        case 'SET_CURRENT_ICON_COLOR':
            return {
                ...state,
                currentIconColor: action.payload
            }
        default:
            return state;
    }
}

export default stylesReducer;
