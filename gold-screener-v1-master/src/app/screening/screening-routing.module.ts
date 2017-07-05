import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningShellComponent } from './screening-shell.component';
import { CriteriaTabsComponent } from './criteria-tabs/criteria-tabs.component';
import { ScopeComponent } from './criteria-tabs/scope/scope.component';
import { MetricSelectionComponent } from './criteria-tabs/metric-selection/metric-selection.component';

const ROUTES: Routes = [
    {
        path: 'screening', component: ScreeningShellComponent, children: [
            { path: '', redirectTo: 'tabs', pathMatch: 'full' },
            {
                path: 'tabs', component: CriteriaTabsComponent, children: [
                    { path: 'scope', component: ScopeComponent },
                    { path: 'metric-selection', component: MetricSelectionComponent },
                    { path: '', redirectTo: 'scope', pathMatch: 'full' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]

})

export class ScreeningRoutingModule { }