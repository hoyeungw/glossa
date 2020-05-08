import { RAW, LITE, DB, RATIO } from '@glossa/enum-data-scopes';
import { ENG, CHS } from '@glossa/enum-fin';
import { TYPE, LABEL } from '@glossa/enum-general-fields';
import { STR, NUM } from '@typen/enum-data-types';

const exchange = {
  head: [TYPE, RAW, LITE, DB, RATIO, LABEL, ENG, CHS],
  rows: [[STR, 100, 100, 100, 100, null, 'date', '日期'], [STR, 100, 101, 101, 101, null, 'symbol', '股票代码'], [NUM, 100, 103, 103, 103, 'TOPEN', 'open', '开盘价'], [NUM, 100, 104, 104, 104, 'LOW', 'low', '最低价'], [NUM, 100, 105, 105, 105, 'HIGH', 'high', '最高价'], [NUM, 100, 106, 106, 106, 'TCLOSE', 'close', '收盘价'], [NUM, 100, NaN, NaN, NaN, 'LCLOSE', 'last close', '前收盘'], [NUM, 100, NaN, NaN, NaN, 'CHG', 'price change', '涨跌额'], [NUM, 100, NaN, NaN, NaN, 'PCHG', 'percent change', '涨跌幅'], [NUM, 100, NaN, NaN, NaN, 'TURNOVER', 'turnover', '换手率'], [NUM, 100, NaN, 107, 107, 'VOTURNOVER', 'volume turnover', '成交量'], [NUM, 100, 107, 108, 108, 'VATURNOVER', 'value turnover', '成交金额'], [NUM, 100, 108, 109, 109, 'TCAP', 'market cap', '总市值'], [NUM, 100, 109, 110, 110, 'MCAP', 'circulating cap', '流通市值']]
};

export { exchange };
