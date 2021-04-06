import { acquire, merges }  from '@vect/vector-merge'
import { balances }         from '../resources'
import { basics }           from '../resources'
import { cashflows }        from '../resources'
import { enterpriseValues } from '../resources'
import { generals }         from '../resources'
import { incomes }          from '../resources'
import { grammatic }        from '../resources'

export const AbbrCollection = {
  generals: generals,
  grammatic: grammatic,
  balances: balances,
  incomes: incomes,
  cashflows: cashflows,
  basics: basics,
  enterpriseValues: enterpriseValues
}

export const Abbr = (...topics) => {
  let dict = merges(grammatic, generals)
  for (let topic of topics)
    if (topic in AbbrCollection)
      acquire(dict, AbbrCollection[topic])
  return dict.sort(([ a ], [ b ]) => String(b).length - String(a).length)
}
