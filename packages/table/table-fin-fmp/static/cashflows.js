import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { NUM, STR }             from '@typen/enum-data-types'

export const cashflows = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [
    [STR, 100, 100, 100, 100, 'symbol',],
    [STR, 100, 100, 100, 100, 'date',],
    [NUM, 100, 100, 100, 100, 'depreciation & amortization',],
    [NUM, 100, 100, 100, 100, 'stock-based compensation',],
    [NUM, 100, 100, 100, 100, 'operating cash flow',],
    [NUM, 100, 100, 100, 100, 'capital expenditure',],
    [NUM, 100, 100, 100, 100, 'acquisitions and disposals',],
    [NUM, 100, 100, 100, 100, 'investment purchases and sales',],
    [NUM, 100, 100, 100, 100, 'investing cash flow',],
    [NUM, 100, 100, 100, 100, 'issuance (repayment) of debt',],
    [NUM, 100, 100, 100, 100, 'issuance (buybacks) of shares',],
    [NUM, 100, 100, 100, 100, 'dividend payments',],
    [NUM, 100, 100, 100, 100, 'financing cash flow',],
    [NUM, 100, 100, 100, 100, 'effect of forex changes on cash',],
    [NUM, 100, 100, 100, 100, 'net cash flow / change in cash',],
    [NUM, 100, 100, 100, 100, 'free cash flow',],
    [NUM, 100, 100, 100, 100, 'net cash/marketcap',],
  ]

}
