import { Table }         from '@analys/table'
import { cashflow }      from './cashflow'
import { liability }     from './liability'
import { liquidity }     from './liquidity'
import { operation }     from './operation'
import { profitability } from './profitability'
import { valuation }     from './valuation'

export const TableCollection = {
  get cashflow () { return cashflow |> Table.from },
  get liability () { return liability |> Table.from },
  get liquidity () { return liquidity |> Table.from },
  get operation () { return operation |> Table.from },
  get profitability () { return profitability |> Table.from },
  get valuation () { return valuation |> Table.from },
}
