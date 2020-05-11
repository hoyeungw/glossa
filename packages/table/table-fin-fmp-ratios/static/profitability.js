import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const profitability = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'ebitperRevenue',],
    [NUM, 111, 111, 111, 111, 'ebtperEBIT',],
    [NUM, 111, 111, 111, 111, 'niperEBT',],
    [NUM, 111, 111, 111, 111, 'grossProfitMargin',],
    [NUM, 111, 111, 111, 111, 'operatingProfitMargin',],
    [NUM, 111, 111, 111, 111, 'pretaxProfitMargin',],
    [NUM, 111, 111, 111, 111, 'netProfitMargin',],
    [NUM, 111, 111, 111, 111, 'effectiveTaxRate',],
    [NUM, 111, 111, 111, 111, 'returnOnAssets',],
    [NUM, 111, 111, 111, 111, 'returnOnEquity',],
    [NUM, 111, 111, 111, 111, 'returnOnCapitalEmployed',],
    [NUM, 111, 111, 111, 111, 'nIperEBT',],
    [NUM, 111, 111, 111, 111, 'eBTperEBIT',],
    [NUM, 111, 111, 111, 111, 'eBITperRevenue',],
  ]
}
