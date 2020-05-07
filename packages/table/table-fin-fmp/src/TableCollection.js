import { Table }     from '@analys/table'
import { balances }  from '../resources/balances'
import { cashflows } from '../resources/cashflows'
import { incomes }   from '../resources/incomes'

export const TableCollection = {
  get balances () {return Table.from(balances)},
  get incomes () {return Table.from(incomes)},
  get cashflows () {return Table.from(cashflows)},
}
