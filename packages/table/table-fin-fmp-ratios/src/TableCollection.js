import { Table }                from '@analys/table'
import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { acquire }              from '@vect/vector-merge'
import { cashflow }             from '../static/cashflow'
import { liability }            from '../static/liability'
import { liquidity }            from '../static/liquidity'
import { operation }            from '../static/operation'
import { profitability }        from '../static/profitability'
import { valuation }            from '../static/valuation'

export const TableCollection = {
  get cashflow () { return cashflow |> Table.from },
  get liability () { return liability |> Table.from },
  get liquidity () { return liquidity |> Table.from },
  get operation () { return operation |> Table.from },
  get profitability () { return profitability |> Table.from },
  get valuation () { return valuation |> Table.from },
  build (...topics) {
    const table = Table.from({
      head: [TYPE, RAW, DB, LITE, RATIO, ENG,],
      rows: [],
      title: 'ratio'
    })
    for (let topic in topics) if (topic in TableCollection)
      acquire(table.rows, TableCollection[topic].rows)
    return table
  }
}
