import { RAW,DB, LITE, RATIO } from '@glossa/enum-data-scopes'
import { ENG }                 from '@glossa/enum-fin'
import { TYPE }                from '@glossa/enum-general-fields'
import { NUM, STR }            from '@typen/enum-data-types'

export const incomes = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows: [
    [STR, 100, 100, 100, 100, 'date'                             ,],
    [NUM, 101, 101, 101, 101, 'revenue'                          ,],
    [NUM, 102, 102, 102, 102, 'revenue growth'                   ,],
    [NUM, 200, 200, 200, 200, 'cost of revenue'                  ,],
    [NUM, 210, 210, 210, 210, 'gross profit'                     ,],
    [NUM, 210, 210, 210, 210, 'r&d expenses'                     ,],
    [NUM, 210, 210, 210, 210, 'sg&a expense'                     ,],
    [NUM, 210, 210, 210, 210, 'operating expenses'               ,],
    [NUM, 210, 210, 210, 210, 'operating income'                 ,],
    [NUM, 210, 210, 210, 210, 'interest expense'                 ,],
    [NUM, 400, 400, 400, 400, 'earnings before tax'              ,],
    [NUM, 220, 220, 220, 220, 'income tax expense'               ,],
    [NUM, 301, 301, NaN, NaN, 'net income - non-controlling int' ,],
    [NUM, 302, 302, NaN, NaN, 'net income - discontinued ops'    ,],
    [NUM, 300, 300, 300, 300, 'net income'                       ,],
    [NUM, 630, 630, NaN, NaN, 'preferred dividends'              ,],
    [NUM, 300, 300, 300, 300, 'net income com'                   ,],
    [NUM, 600, 600, NaN, NaN, 'eps'                              ,],
    [NUM, 601, 601, NaN, NaN, 'eps diluted'                      ,],
    [NUM, 610, 610, NaN, NaN, 'weighted average shs out'         ,],
    [NUM, 611, 611, NaN, NaN, 'weighted average shs out (dil)'   ,],
    [NUM, 620, 620, NaN, NaN, 'dividend per share'               ,],
    [NUM, 500, 500, NaN, NaN, 'gross margin'                     ,],
    [NUM, 501, 501, NaN, NaN, 'ebitda margin'                    ,],
    [NUM, 502, 502, NaN, NaN, 'ebit margin'                      ,],
    [NUM, 503, 503, NaN, NaN, 'profit margin'                    ,],
    [NUM, 504, 504, NaN, NaN, 'free cash flow margin'            ,],
    [NUM, 400, 400, 400, 400, 'ebitda'                           ,],
    [NUM, 400, 400, 400, 400, 'ebit'                             ,],
    [NUM, 400, 400, 400, 400, 'consolidated income'              ,],
    [NUM, 505, 505, NaN, NaN, 'earnings before tax margin'       ,],
    [NUM, 506, 506, NaN, NaN, 'net profit margin'                ,],
  ]
}
