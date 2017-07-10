import { INIT, UPDATE_ALL_STOCKS } from '../actions';

export class BaseDispatcher {
    constructor(private dispatcher) { }

    initialize(): void {
        this.dispatcher.dispatch({ type: INIT });
    }

    updateAllStocks(stockData): void {
        this.dispatcher.dispatch({ type: UPDATE_ALL_STOCKS, stockData });
    }
}