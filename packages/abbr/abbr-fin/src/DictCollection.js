import { MakeReplaceable } from '@spare/translator'
import { acquire, merge }  from '@vect/vector-merge'
import * as Resources      from '../resources'
import {
  grammatic,
  generals,
  balances,
  incomes,
  cashflows,
  basics,
  enterpriseValues
}                          from '../resources'

const makeReplaceable = MakeReplaceable({ sort: true })

export const DictCollection = {
  get generals() { return merge(grammatic, generals) |> makeReplaceable },
  get balances() { return merge(grammatic, generals, balances) |> makeReplaceable },
  get incomes() { return merge(grammatic, generals, incomes) |> makeReplaceable },
  get cashflows() { return merge(grammatic, generals, cashflows) |> makeReplaceable },
  get basics() { return merge(grammatic, generals, basics) |> makeReplaceable },
  get enterpriseValues() { return merge(grammatic, generals, enterpriseValues) |> makeReplaceable },
  build(...topics) {
    const entries = []
    for (let topic of topics) if (topic in Resources)
      acquire(entries, Resources[topic])
    return entries |> makeReplaceable
  }
}
