import { generals } from '../resources/generals'
import { balances } from '../resources/balances'
import { incomes } from '../resources/incomes'
import { cashflows } from '../resources/cashflows'
import { basics } from '../resources/basics'
import { enterpriseValues } from '../resources/enterpriseValues'

export const AbbrCollection = {
  generals: generals,
  balances: balances,
  incomes: incomes,
  cashflows: cashflows,
  basics: basics,
  enterpriseValues: enterpriseValues
}

export const Abbr = (...topics) => {
  let dict = generals
  for (let topic of topics)
    if (topic in AbbrCollection)
      dict = dict.concat(AbbrCollection[topic])
  return dict
    .sort(([a], [b]) => String(b).length - String(a).length)
}
