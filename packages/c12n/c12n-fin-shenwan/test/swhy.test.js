import { DecoTable, delogger } from '@spare/logger'
import { TABLE } from '@analys/enum-tabular-types'
import { C12nShenwan } from '../src/C12nShenwan'
import { promises } from 'fs'

C12nShenwan
  .sectors({ format: TABLE })
  .then(table => {
    table |> DecoTable({ top: 3, bottom: 3 }) |> delogger
    return table
  })
  .then(async table => {
    await promises.writeFile(__dirname + '/../static/Sectors.json', JSON.stringify(table))
  })

// .then(tb => tb |> decoTable|> logger)
