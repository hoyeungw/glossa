import { Table }            from '@analys/table'
import { balances }         from '../resources/balances'
import { cashflows }        from '../resources/cashflows'
import { enterpriseValues } from '../resources/enterpriseValues'
import { incomes }          from '../resources/incomes'

export const TableCollection = {
  get balances () {return Table.from(balances)},
  get incomes () {return Table.from(incomes)},
  get cashflows () {return Table.from(cashflows)},
  get enterpriseValues () {return Table.from(enterpriseValues)}
}
