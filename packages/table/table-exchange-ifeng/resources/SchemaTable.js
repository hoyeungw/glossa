import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { CHS, ENG }             from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const SchemaTable = {
  head: [TYPE, RAW, LITE, DB, RATIO, CHS, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, '日期', 'date',],
    [STR, 100, 100, 100, 100, '代码', 'symbol',],
    [NUM, 101, 101, 101, 101, '开盘价', 'open',],
    [NUM, 102, 102, 102, 102, '最高价', 'high',],
    [NUM, 104, 104, 104, 104, '收盘价', 'close',],
    [NUM, 103, 103, 103, 103, '最低价', 'low',],
    [NUM, 105, 105, 105, 105, '成交量', 'volume',],
    [NUM, 200, NaN, NaN, NaN, '价格变动', 'price change',],
    [NUM, 200, 106, NaN, NaN, '涨跌幅', 'percent change',],
    [NUM, 200, NaN, NaN, NaN, '5日均价', 'average price in 5 days',],
    [NUM, 200, NaN, NaN, NaN, '10日均价', 'average price in 10 days',],
    [NUM, 200, NaN, NaN, NaN, '20日均价', 'average price in 20 days',],
    [NUM, 200, NaN, NaN, NaN, '5日均量', 'average volume in 5 days',],
    [NUM, 200, NaN, NaN, NaN, '10日均量', 'average volume in 10 days',],
    [NUM, 200, NaN, NaN, NaN, '20日均量', 'average volume in 20 days',],
  ]
}
