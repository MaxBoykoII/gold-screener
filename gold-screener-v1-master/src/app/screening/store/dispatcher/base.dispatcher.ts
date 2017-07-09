import { INIT } from '../actions';

export class BaseDispatcher {
    constructor(private dispatcher) {}

    initialize(): void {
        this.dispatcher.dispatch({type: INIT});
    }
}