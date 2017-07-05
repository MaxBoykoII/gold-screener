/* Redux imports */

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

/* Models */

import { ScreenerState } from './models'

/* Import preloaded state */

import { preloadedState } from './preloaded-state';


/* Reducers */

const combinedReducer = (state: ScreenerState, action) => state; // placeholder

export const store = createStore<ScreenerState>(combinedReducer, preloadedState, compose(applyMiddleware(logger)));