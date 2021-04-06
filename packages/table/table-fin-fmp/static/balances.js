import { RAW,DB, LITE, RATIO } from '@glossa/enum-data-scopes'
import { ENG }                 from '@glossa/enum-fin'
import { TYPE }                from '@glossa/enum-general-fields'
import { NUM, STR }            from '@typen/enum-data-types'

export const balances = {
  head:[TYPE, RAW, DB, LITE, RATIO, ENG,],
  rows:[
    [STR, 100, 100, 100, 100, 'symbol'                         ,],
    [STR, 100, 100, 100, 100, 'date'                           ,],
    [NUM, 111, 111, 111, 111, 'cash and cash equivalents'      ,],
    [NUM, 111, 111, 111, 111, 'short-term investments'         ,],
    [NUM, 111, 111, 111, 111, 'cash and short-term investments',],
    [NUM, 111, 111, 111, 111, 'receivables'                    ,],
    [NUM, 111, 111, 111, 111, 'inventories'                    ,],
    [NUM, 110, 110, 110, 110, 'total current assets'           ,],
    [NUM, 161, 161, 161, 161, 'property plant & equipment net' ,],
    [NUM, 161, 161, 161, 161, 'goodwill and intangible assets' ,],
    [NUM, 161, 161, 161, 161, 'long-term investments'          ,],
    [NUM, 161, 161, 161, 161, 'tax assets'                     ,],
    [NUM, 160, 160, 160, 160, 'total non-current assets'       ,],
    [NUM, 101, 101, 101, 101, 'total assets'                   ,],
    [NUM, 211, 211, 211, 211, 'payables'                       ,],
    [NUM, 211, 211, 211, 211, 'short-term debt'                ,],
    [NUM, 210, 210, 210, 210, 'total current liabilities'      ,],
    [NUM, 261, 261, 261, 261, 'long-term debt'                 ,],
    [NUM, 261, 261, 261, 261, 'total debt'                     ,],
    [NUM, 261, 261, 261, 261, 'deferred revenue'               ,],
    [NUM, 261, 261, 261, 261, 'tax liabilities'                ,],
    [NUM, 261, 261, 261, 261, 'deposit liabilities'            ,],
    [NUM, 260, 260, 260, 260, 'total non-current liabilities'  ,],
    [NUM, 201, 201, 201, 201, 'total liabilities'              ,],
    [NUM, 311, 311, 311, 311, 'other comprehensive income'     ,],
    [NUM, 311, 311, 311, 311, 'retained earnings (deficit)'    ,],
    [NUM, 301, 301, 301, 301, 'total shareholders equity'      ,],
    [NUM, 400, 400, NaN, NaN, 'investments'                    ,],
    [NUM, 400, 400, NaN, NaN, 'net debt'                       ,],
    [NUM, 400, 400, NaN, NaN, 'other assets'                   ,],
    [NUM, 400, 400, NaN, NaN, 'other liabilities'              ,],
  ]
}
