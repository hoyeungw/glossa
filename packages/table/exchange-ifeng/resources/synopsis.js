import { ENG } from '@glossa/enum-fin'

const { CHS } = require('@glossa/enum-fin')

export const Synopsis = {
  head: [CHS, ENG, LITE, DB],
  rows: [
    ['日期', 'date', 0, 0],
    ['代码', 'symbol', 0, 0],
    ['开盘价', 'open', 1, 1],
    ['最高价', 'high', 2, 2],
    ['收盘价', 'close', 4, 4],
    ['最低价', 'low', 3, 3],
    ['成交量', 'volume', 5, 5],
    ['价格变动', 'price change', NaN, NaN],
    ['涨跌幅', 'percent change', 6, NaN],
    ['5日均价', 'average price in 5 days', NaN, NaN],
    ['10日均价', 'average price in 10 days', NaN, NaN],
    ['20日均价', 'average price in 20 days', NaN, NaN],
    ['5日均量', 'average volume in 5 days', NaN, NaN],
    ['10日均量', 'average volume in 10 days', NaN, NaN],
    ['20日均量', 'average volume in 20 days', NaN, NaN],
  ]
}
