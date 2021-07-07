import {createWrapper} from 'next-redux-wrapper';
import {createStore} from 'redux';

import rootReducer from './root-reducer';

const makeStore = context => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, {debug: false});
