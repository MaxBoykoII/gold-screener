import { NgModule } from '@angular/core';

/* Redux imports */
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, ScreenerState } from './store';

import { ScreeningRoutingModule } from './screening-routing.module';
import { ScreeningShellComponent } from './screening-shell.component';

/* Tabs for definining search criteria */
import { CriteriaTabsComponent } from './criteria-tabs/criteria-tabs.component';
import { ScopeComponent } from './criteria-tabs/scope/scope.component';
import { MetricSelectionComponent } from './criteria-tabs/metric-selection/metric-selection.component';

@NgModule({
    imports: [ScreeningRoutingModule, NgReduxModule],
    declarations: [
        ScreeningShellComponent,
        CriteriaTabsComponent,
        ScopeComponent,
        MetricSelectionComponent
    ]
})

export class ScreeningModule { 
    constructor(private ngRedux: NgRedux<ScreenerState>) {
        ngRedux.provideStore(store);
    }
}