import { MakeReplaceable } from '@spare/translator'
import { balances }        from '../static/balances'
import { basics }          from '../static/basics'
import { cashflows }       from '../static/cashflows'
import { incomes }         from '../static/incomes'

const makeReplaceable = MakeReplaceable({ sort: true })

export const DictCollection = {
  get balances () {return balances |> makeReplaceable},
  get incomes () {return incomes |> makeReplaceable},
  get cashflows () {return cashflows |> makeReplaceable},
  get basics () {return basics |> makeReplaceable},
}
