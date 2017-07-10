import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/* Utilities */
import * as R from 'ramda';

@Injectable()

export class FetchingService {
    private baseUrl = `..`;
    private baseStocksUrl = `${this.baseUrl}/edp-api-v3a.php?`;
    private baseDatesUrl = `${this.baseUrl}/valid-dates-api.php`;

    constructor(private http: Http) { }

    getStocks$({ ymd, hp }: { ymd: string, hp: number }) {
        return this.http
            .get(`${this.baseStocksUrl}m=${ymd}&hp=${hp}`)
            .map(res => this.extractData(res));
    }

    getValidDates$() {
        return this.http
            .get(`${this.baseDatesUrl}`)
            .map(res => this.extractData(res));
    }

    getStocksWithDates$(apiSettings) {
        return this.getStocks$(apiSettings).combineLatest(this.getValidDates$(), (stocks, dates) => ({ stocks, dates }));
    }

    private extractData(res: Response, key = '_body', fallback = {}) {
        return R.compose(R.defaultTo(fallback), JSON.parse, R.prop(key))(res);
    }
}