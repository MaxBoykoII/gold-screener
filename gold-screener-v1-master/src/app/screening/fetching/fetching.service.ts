import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class FetchingService {
    private baseUrl = `..`;
    private baseStocksUrl = `${this.baseUrl}/edp-api-v3a.php?`;
    private baseDatesUrl = `${this.baseUrl}/valid-dates-api.php`;

    private defaultYmd = `2015-10-13`;
    private defaultHp = 63;

    constructor(private http: Http) { }

    getStocks(ymd: string = this.defaultYmd, hp: number = this.defaultHp) {
        return this.http.get(`${this.baseStocksUrl}m=${ymd}&hp=${hp}`);
    }
}