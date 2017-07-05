import { Component } from '@angular/core';

/* Redux imports */
import { NgRedux, select } from 'ng2-redux';
import { ScreenerState } from '../../store';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'metric-selection',
    templateUrl: './metric-selection.component.html',
    styleUrls: ['./metric-selection.component.scss']
})

export class MetricSelectionComponent {
    /* Select the metrics from the state */
    @select('metaDefinitions') metaDefinitions$: Observable<any>;
    metrics$ = this.metaDefinitions$;

    constructor(private store: NgRedux<ScreenerState>) { }
}