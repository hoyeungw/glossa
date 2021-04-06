import { promises } from 'fs'
import { DecoTable, delogger } from '@spare/logger'
import { TABLE } from '@analys/enum-tabular-types'
import { C12nTs } from '../src/C12nTs'
import { Table } from '@analys/table'

C12nTs
  .dailySectors({ format: TABLE })
  .then(table => {
    table = Table.from(table)
    table.mutateColumn('est',
      x => x.length === 8
        ? x.slice(0, 4) + '-' + x.slice(4, 6) + '-' + x.slice(6, 8)
        : null)
    table |> DecoTable({ top: 10, bottom: 3, fullAngle: true }) |> delogger
    return table
  })
  .then(async table => {
    await promises.writeFile(__dirname + '/../static/Sectors.json', JSON.stringify(table))
  })
