import { INIT, UPDATE_ALL_STOCKS } from '../../actions';
import { ActionsObservable } from 'redux-observable';

/* Utilities */
import * as R from 'ramda';

const updateAllStocks = stockData => ({type: UPDATE_ALL_STOCKS, stockData});

export const initEpic = (actions$, store, { getJSON }) =>
    actions$.ofType(INIT)
            .mergeMap(() => R.compose(getJSON, R.prop( `APISettings`), R.call, R.prop(`getState`))(store))
            .mergeMap(({stocks, dates}) => ActionsObservable.of(updateAllStocks(stocks)));