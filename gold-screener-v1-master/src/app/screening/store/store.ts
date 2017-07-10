/* Redux imports */

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import flatCombineReducers from 'flat-combine-reducers';

/* Models */

import { ScreenerState } from './models'

/* Import preloaded state */

import { preloadedState } from './preloaded-state';

/* Middleware imports */
import { createEpicMiddleware } from './middleware';


/* Reducers */
import { updateAllStocks } from './reducers';

const reducers = [updateAllStocks];

const combinedReducer = flatCombineReducers(...reducers);

export const configureStore = dependencies => {
    const epicMiddleware = createEpicMiddleware(dependencies);
    const enhancer = compose(applyMiddleware(epicMiddleware, logger));

    return createStore<ScreenerState>(combinedReducer, preloadedState, enhancer);
}