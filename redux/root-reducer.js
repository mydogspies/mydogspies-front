import {combineReducers} from 'redux';

import tokensReducer from '../redux/tokens/tokens.reducer';

export default combineReducers({
    tokens: tokensReducer
});
