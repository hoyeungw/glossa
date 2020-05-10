import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'

export const enterpriseValues = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [
    ['string', 100, 100, 100, 100, 'symbol',],
    ['string', 100, 100, 100, 100, 'date',],
    ['number', 111, 111, 111, 111, 'Stock Price',],
    ['number', 111, 111, 111, 111, 'Number of Shares',],
    ['number', 111, 111, 111, 111, 'Market Capitalization',],
    ['number', 111, 111, 111, 111, '- Cash & Cash Equivalents',],
    ['number', 111, 111, 111, 111, '+ Total Debt',],
    ['number', 111, 111, 111, 111, 'Enterprise Value',],
  ],
}
