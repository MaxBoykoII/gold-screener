import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningShellComponent } from './screening/screening-shell.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'screening', pathMatch: 'full' },
    //{ path: 'screening', component: ScreeningShellComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]

})

export class AppRoutingModule { }