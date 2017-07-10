import { ScreenerState } from './models';

const defaultYmd = `2015-10-13`;
const defaultHp = 63

export const preloadedState: ScreenerState = {
    metaDefinitions: [],
    stocks: [],
    APISettings: { ymd: defaultYmd, hp: defaultHp }
};