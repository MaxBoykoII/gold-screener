import { ScreenerState } from '../models';
import { UPDATE_ALL_STOCKS } from '../actions';

export const reducer = (state: ScreenerState, action) => {
    switch (action.type) {
        case UPDATE_ALL_STOCKS:
            return { stocks: action.stockData };
    }
}