import { Table }     from '@analys/table'
import { balances }  from './balances'
import { basics }    from './basics'
import { cashflows } from './cashflows'
import { incomes }   from './incomes'

export const TableCollection = {
  get balances () {return Table.from(balances)},
  get incomes () {return Table.from(incomes)},
  get cashflows () {return Table.from(cashflows)},
  get basics () {return Table.from(basics)}
}
