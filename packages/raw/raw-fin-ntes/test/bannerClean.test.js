import { balances } from '../static/balances'
import { incomes } from '../static/incomes'
import { cashflows } from '../static/cashflows'
import { basics } from '../static/basics'
import { makeReplaceable } from '@glossa/translator'
import { logger, xr } from '@spare/logger'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { says } from '@palett/says'

const LEXICON = [
  [/\s+/g, ''],
  [/\(.*?\)/g, ''],
  [/(、)|：|:|\(/g, '_']
] |> makeReplaceable

export const cleanBanner = tx => String(tx).replace(LEXICON, x => x.trim())

'translation' |> says[BALANCES]
for (let key of balances) xr().key(key).value(cleanBanner(key)) |> logger

'translation' |> says[INCOMES]
for (let key of incomes) xr().key(key).value(cleanBanner(key)) |> logger

'translation' |> says[CASHFLOWS]
for (let key of cashflows) xr().key(key).value(cleanBanner(key)) |> logger

'translation' |> says[BASICS]
for (let key of basics) xr().key(key).value(cleanBanner(key)) |> logger
