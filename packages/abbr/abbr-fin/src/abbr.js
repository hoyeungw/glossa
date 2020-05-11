import { acquire }          from '@vect/vector-merge'
import { balances }         from '../resources/balances'
import { basics }           from '../resources/basics'
import { cashflows }        from '../resources/cashflows'
import { enterpriseValues } from '../resources/enterpriseValues'
import { generals }         from '../resources/generals'
import { incomes }          from '../resources/incomes'

export const AbbrCollection = {
  generals: generals,
  balances: balances,
  incomes: incomes,
  cashflows: cashflows,
  basics: basics,
  enterpriseValues: enterpriseValues
}

export const Abbr = (...topics) => {
  let dict = acquire([], generals)
  for (let topic of topics)
    if (topic in AbbrCollection)
      acquire(dict, AbbrCollection[topic])
  return dict.sort(([a], [b]) => String(b).length - String(a).length)
}
