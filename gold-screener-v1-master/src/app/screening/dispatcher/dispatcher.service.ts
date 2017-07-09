import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { BaseDispatcher, ScreenerState } from '../store';


@Injectable()

export class DispatcherService extends BaseDispatcher {
    constructor(private ngRedux: NgRedux<ScreenerState>) {
        super(ngRedux);
    }
}