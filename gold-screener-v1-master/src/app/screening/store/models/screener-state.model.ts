export interface ScreenerState {
    metaDefinitions: Array<{ sid: string; id: string; full: string; role: string }>;
    stocks: Array<any>,
    APISettings: { ymd: string; hp: number }
}