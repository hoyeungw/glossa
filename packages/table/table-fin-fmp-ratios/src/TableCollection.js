import { Table }                from '@analys/table'
import { DB, LITE, RATIO, RAW } from '@glossa/enum-data-scopes'
import { ENG }                  from '@glossa/enum-fin'
import { TYPE }                 from '@glossa/enum-general-fields'
import { acquire }              from '@vect/vector-merge'

export const TableCollection = {
  get balances () {return Table.from(balances)},
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
