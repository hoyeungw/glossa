import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const liability = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'debtRatio',],
    [NUM, 111, 111, 111, 111, 'debtEquityRatio',],
    [NUM, 111, 111, 111, 111, 'longtermDebtToCapitalization',],
    [NUM, 111, 111, 111, 111, 'totalDebtToCapitalization',],
    [NUM, 111, 111, 111, 111, 'interestCoverage',],
    [NUM, 111, 111, 111, 111, 'cashFlowToDebtRatio',],
    [NUM, 111, 111, 111, 111, 'companyEquityMultiplier',],
  ]
}
