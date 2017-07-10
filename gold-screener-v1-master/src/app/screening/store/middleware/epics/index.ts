import { combineEpics, createEpicMiddleware } from 'redux-observable';

/* Utilities */
import * as R from 'ramda';

/* Import the individual epics */
import { initEpic } from './init.epic';

const epics = [initEpic];

const rootEpic = combineEpics(...epics);

export const createMiddleWare = dependencies => R.call(createEpicMiddleware, rootEpic, { dependencies });