import { MakeReplaceable }  from '@spare/translator'
import { merge }            from '@vect/vector-merge'
import { balances }         from '../resources/balances'
import { basics }           from '../resources/basics'
import { cashflows }        from '../resources/cashflows'
import { enterpriseValues } from '../resources/enterpriseValues'
import { generals }         from '../resources/generals'
import { incomes }          from '../resources/incomes'

const makeReplaceable = MakeReplaceable({ sort: true })

export const DictCollection = {
  get generals () { return merge(generals, generals) |> makeReplaceable},
  get balances () { return merge(generals, balances) |> makeReplaceable},
  get incomes () { return merge(generals, incomes) |> makeReplaceable},
  get cashflows () { return merge(generals, cashflows) |> makeReplaceable},
  get basics () { return merge(generals, basics) |> makeReplaceable},
  get enterpriseValues () { return merge(generals, enterpriseValues) |> makeReplaceable}
}
