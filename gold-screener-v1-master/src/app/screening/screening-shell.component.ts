import { Component, OnInit } from '@angular/core';

/* Import Fetching Service */
import { FetchingService } from './fetching';

/* Import Dispatch Service */
import { DispatchService } from './dispatcher';

@Component({
    selector: 'screening-shell',
    templateUrl: './screening-shell.component.html',
    styleUrls: ['./screening-shell.component.scss']
})

export class ScreeningShellComponent implements OnInit {
    constructor(private fetcher: FetchingService, private dispatcher: DispatchService) { }

    ngOnInit(): void {
        /* Initialize app */
        this.dispatcher.initialize();
    }
}