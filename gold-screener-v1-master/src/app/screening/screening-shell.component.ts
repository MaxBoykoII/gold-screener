import { Component, OnInit } from '@angular/core';

/* Import Fetching Service */
import { FetchingService } from './fetching';

@Component({
    selector: 'screening-shell',
    templateUrl: './screening-shell.component.html',
    styleUrls: ['./screening-shell.component.scss']
})

export class ScreeningShellComponent implements OnInit {
    constructor(private fetcher: FetchingService) { }

    ngOnInit(): void {
     this.fetcher.getStocksWithDates$().subscribe(({stocks, dates})=> {
        console.log('stocks', stocks);
        console.log('and here are the dates', dates);
     })
    }
}