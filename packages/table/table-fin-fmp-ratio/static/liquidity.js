import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const liquidity = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'currentRatio',],
    [NUM, 111, 111, 111, 111, 'quickRatio',],
    [NUM, 111, 111, 111, 111, 'cashRatio',],
    [NUM, 111, 111, 111, 111, 'daysOfSalesOutstanding',],
    [NUM, 111, 111, 111, 111, 'daysOfInventoryOutstanding',],
    [NUM, 111, 111, 111, 111, 'operatingCycle',],
    [NUM, 111, 111, 111, 111, 'daysOfPayablesOutstanding',],
    [NUM, 111, 111, 111, 111, 'cashConversionCycle',],
  ]
}
