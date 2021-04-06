import { Table }            from '@analys/table'
import { balances }         from './balances'
import { cashflows }        from './cashflows'
import { enterpriseValues } from './enterpriseValues'
import { incomes }          from './incomes'

export const TableCollection = {
  get balances () { return balances |> Table.from },
  get incomes () { return incomes |> Table.from },
  get cashflows () { return cashflows |> Table.from },
  get enterpriseValues () {return enterpriseValues |> Table.from}
}
