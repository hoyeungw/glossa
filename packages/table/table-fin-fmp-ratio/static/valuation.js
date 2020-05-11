import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const valuation = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'priceBookValueRatio',],
    [NUM, 111, 111, 111, 111, 'priceToBookRatio',],
    [NUM, 111, 111, 111, 111, 'priceToSalesRatio',],
    [NUM, 111, 111, 111, 111, 'priceEarningsRatio',],
    [NUM, 111, 111, 111, 111, 'receivablesTurnover',],
    [NUM, 111, 111, 111, 111, 'priceToFreeCashFlowsRatio',],
    [NUM, 111, 111, 111, 111, 'priceToOperatingCashFlowsRatio',],
    [NUM, 111, 111, 111, 111, 'priceCashFlowRatio',],
    [NUM, 111, 111, 111, 111, 'priceEarningsToGrowthRatio',],
    [NUM, 111, 111, 111, 111, 'priceSalesRatio',],
    [NUM, 111, 111, 111, 111, 'dividendYield',],
    [NUM, 111, 111, 111, 111, 'enterpriseValueMultiple',],
    [NUM, 111, 111, 111, 111, 'priceFairValue',],
  ]
}
