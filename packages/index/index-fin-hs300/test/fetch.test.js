import { promises } from 'fs'
import { TABLE } from '@analys/enum-tabular-types'
import { DecoTable, says, xr } from '@spare/logger'
import { Verse } from '@spare/verse'
import { IndexHS300 } from '../src/IndexHS300'

IndexHS300
  .indexes({ format: TABLE })
  .then(async table => {
    const dest = __dirname + '/' + '../static/IndexHS300.json'
    table |> DecoTable({ top: 3, bottom: 1 }) |> says[`saving to :${dest}`]
    await promises.writeFile(dest, Verse.table(table, { quote: '\"' }))
    xr().table(table.title).p('written to').dest(dest) |> says['fs.promises']
  })
