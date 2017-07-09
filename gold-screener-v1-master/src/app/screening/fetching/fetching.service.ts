import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/* Utilities */
import * as R from 'ramda';

@Injectable()

export class FetchingService {
    private baseUrl = `..`;
    private baseStocksUrl = `${this.baseUrl}/edp-api-v3a.php?`;
    private baseDatesUrl = `${this.baseUrl}/valid-dates-api.php`;

    private defaultYmd = `2015-10-13`;
    private defaultHp = 63;

    constructor(private http: Http) { }

    getStocks(url = this.baseStocksUrl, ymd: string = this.defaultYmd, hp: number = this.defaultHp, extracter = this.extractData) {
        return this.http
            .get(`${url}m=${ymd}&hp=${hp}`)
            .map(res => extracter(res));
    }

    getValidDates(url = this.baseDatesUrl, extracter = this.extractData) {
        return this.http
            .get(`${url}`)
            .map(res => extracter(res));
    }

    private extractData(res: Response, key = '_body', fallback = {}) {
        return R.compose(R.defaultTo(fallback), JSON.parse, R.prop(key))(res);
    }
}