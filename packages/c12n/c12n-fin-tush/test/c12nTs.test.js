import { promises } from 'fs'
import { DecoTable, delogger } from '@spare/logger'
import { TABLE } from '@analys/enum-tabular-types'
import { C12nTs } from '../src/C12nTs'

C12nTs
  .dailySectors({ format: TABLE })
  .then(table => {
    table |> DecoTable({ top: 10, bottom: 3, fullAngle: true }) |> delogger
    return table
  })
  .then(async table => {
    await promises.writeFile(__dirname + '/../static/Sectors.json', JSON.stringify(table))
  })
