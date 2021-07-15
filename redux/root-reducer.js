import {combineReducers} from 'redux';

import tokensReducer from '../redux/tokens/tokens.reducer';
import stylesReducer from '../redux/styles/styles.reducer';

export default combineReducers({
    tokens: tokensReducer,
    styles: stylesReducer
});
