import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { CHS }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const basics = {
  head: [TYPE, RAW, DB, LITE, RATIO, CHS],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',], // rawdata里没有
    [STR, 100, 100, 101, 101, '报告日期'],
    [NUM, 101, 101, 102, 102, '基本每股收益'],
    [NUM, 102, 102, 103, 103, '每股净资产'],
    [NUM, 103, 103, 104, 104, '每股经营活动产生的现金流量净额'],
    [NUM, 104, 104, 105, 105, '主营业务收入'],
    [NUM, 105, 105, 106, 106, '主营业务利润'],
    [NUM, 106, 106, 107, 107, '营业利润'],
    [NUM, 107, 107, 108, 108, '投资收益'],
    [NUM, 108, 108, 109, 109, '营业外收支净额'],
    [NUM, 109, 109, 110, 110, '利润总额'],
    [NUM, 110, 110, 111, 111, '净利润'],
    [NUM, 111, 111, NaN, NaN, '净利润'],
    [NUM, 112, 112, NaN, NaN, '经营活动产生的现金流量净额'],
    [NUM, 113, 113, NaN, NaN, '现金及现金等价物净增加额'],
    [NUM, 114, 114, NaN, NaN, '总资产'],
    [NUM, 115, 115, NaN, NaN, '流动资产'],
    [NUM, 116, 116, NaN, NaN, '总负债'],
    [NUM, 117, 117, NaN, NaN, '流动负债'],
    [NUM, 118, 118, NaN, NaN, '股东权益不含少数股东权益'],
    [NUM, 119, 119, 113, 113, '净资产收益率加权'],
  ]
}
