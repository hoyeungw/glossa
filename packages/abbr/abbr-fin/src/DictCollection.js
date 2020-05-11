import { MakeReplaceable } from '@spare/translator'
import { acquire, merge }  from '@vect/vector-merge'
import * as Resources      from '../resources'

const makeReplaceable = MakeReplaceable({ sort: true })

export const DictCollection = {
  get generals () { return Resources.generals |> makeReplaceable },
  get balances () { return merge(Resources.generals, Resources.balances) |> makeReplaceable },
  get incomes () { return merge(Resources.generals, Resources.incomes) |> makeReplaceable },
  get cashflows () { return merge(Resources.generals, Resources.cashflows) |> makeReplaceable },
  get basics () { return merge(Resources.generals, Resources.basics) |> makeReplaceable },
  get enterpriseValues () { return merge(Resources.generals, Resources.enterpriseValues) |> makeReplaceable },
  build (...topics) {
    const entries = []
    for (let topic of topics) if (topic in Resources)
      acquire(entries, Resources[topic])
    return entries |> makeReplaceable
  }
}
