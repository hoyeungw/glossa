import { TABLE }               from '@analys/enum-tabular-types'
import { DecoTable, delogger } from '@spare/logger'
import { promises }            from 'fs'
import { C12nSina }            from '../src/C12nSina'

C12nSina
  .sectors({ format: TABLE })
  .then(table => {
    table |> DecoTable({ top: 3, bottom: 3 }) |> delogger
    return table
  })
  .then(async table => {
    await promises.writeFile(__dirname + '/../static/Sectors.json',
      JSON.stringify(table))
  })

C12nSina
  .concepts({ format: TABLE })
  .then(table => {
    table |> DecoTable({ top: 3, bottom: 3 }) |> delogger
    return table
  })
  .then(async table => {
    await promises.writeFile(__dirname + '/../static/Concepts.json', JSON.stringify(table))
  })

// .then(tb => tb |> decoTable|> logger)
