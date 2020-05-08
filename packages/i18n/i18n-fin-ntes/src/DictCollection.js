import { MakeReplaceable } from '@spare/translator'
import { balances }        from '../resources/balances'
import { basics }          from '../resources/basics'
import { cashflows }       from '../resources/cashflows'
import { incomes }         from '../resources/incomes'

const makeReplaceable = MakeReplaceable({ sort: true })

export const DictCollection = {
  get balances () {return balances |> makeReplaceable},
  get incomes () {return incomes |> makeReplaceable},
  get cashflows () {return cashflows |> makeReplaceable},
  get basics () {return basics |> makeReplaceable},
}
