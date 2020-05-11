import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const cashflow = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 111, 111, 111, 111, 'operatingCashFlowPerShare',],
    [NUM, 111, 111, 111, 111, 'freeCashFlowPerShare',],
    [NUM, 111, 111, 111, 111, 'cashPerShare',],
    [NUM, 111, 111, 111, 111, 'payoutRatio',],
    [NUM, 111, 111, 111, 111, 'receivablesTurnover',],
    [NUM, 111, 111, 111, 111, 'operatingCashFlowSalesRatio',],
    [NUM, 111, 111, 111, 111, 'freeCashFlowOperatingCashFlowRatio',],
    [NUM, 111, 111, 111, 111, 'cashFlowCoverageRatios',],
    [NUM, 111, 111, 111, 111, 'shortTermCoverageRatios',],
    [NUM, 111, 111, 111, 111, 'capitalExpenditureCoverageRatios',],
    [NUM, 111, 111, 111, 111, 'dividendpaidAndCapexCoverageRatios',],
    [NUM, 111, 111, 111, 111, 'dividendPayoutRatio',],
  ]
}
