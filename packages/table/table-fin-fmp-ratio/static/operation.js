import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const operation = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'receivablesTurnover',],
    [NUM, 111, 111, 111, 111, 'payablesTurnover',],
    [NUM, 111, 111, 111, 111, 'inventoryTurnover',],
    [NUM, 111, 111, 111, 111, 'fixedAssetTurnover',],
    [NUM, 111, 111, 111, 111, 'assetTurnover',],
  ]
}
